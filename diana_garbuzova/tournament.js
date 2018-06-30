const { getAllowedNames, getAllowedClasses } = require('./character/charactersOptions');
const { getRandomNumber, isOptionValid, removeItemsByIndex } = require('./utils');
const { Heralds } = require('./heralds');

class Tournament {
  constructor(maxMembersNum) {
    this._maxMembersNum = maxMembersNum;
    this._members = [];
  }

  get members() {
    return this._members;
  }

  set members(member) {
    this._members.push(member);
  }

  registration(applicant) {
    if (this.members.length < this._maxMembersNum) {
      this.checkAndRegistration(applicant);
    } else {
      Heralds.declareSetClosure(applicant.name);
    }
  }

  checkAndRegistration(applicant) {
    const name = applicant.name;
    const isNameCanBeUsed = this.isNameCanBeUsed(getAllowedNames(applicant), name);
    const isClassCanBeUsed = isOptionValid(getAllowedClasses(applicant), applicant.charClass);
    if (isNameCanBeUsed && isClassCanBeUsed) {
      this.members = applicant;
    } else {
      Heralds.exclusionApplicant(name)
    }
  }

  isNameCanBeUsed(allowedNames, name) {
    const lowerCaseName = name.toLowerCase();
    return isOptionValid(allowedNames, lowerCaseName)
        && !isOptionValid(this.getMembersNames(), lowerCaseName);
  }

  getMembersNames() {
    return this._members.map(member => member.name);
  }

  startRound() {
    this.startRoundRecursive(this.members);
  }

  startRoundRecursive(members) {
    if (members.length > 1) {
      Heralds.declareRoundStart();
      const generatedPairs = this.generatePairs(members);
      const winners = this.simulateRound(generatedPairs);
      this.startRoundRecursive(winners);
    } else if (members.length === 1) {
      const lastMember = members[0];
      Heralds.declareTournamentWinner(lastMember.name, lastMember.charClass)
    }
  }

  generatePairs(members) {
    const pairs = [];
    const newMembers = [...members];
    while (newMembers.length >= 2) {
      const maxLength = newMembers.length;
      const firstMemberIndex = getRandomNumber(0, maxLength - 1);
      const secondMemberIndex = getRandomNumber(0, maxLength - 1);
      if (firstMemberIndex !== secondMemberIndex) {
        const pair = [newMembers[firstMemberIndex], newMembers[secondMemberIndex]];
        pairs.push(pair);
        removeItemsByIndex(newMembers, firstMemberIndex, secondMemberIndex)
      }
    }
    if (newMembers.length === 1) {
      pairs.push([newMembers[0], null]);
    }
    return pairs;
  }

  simulateRound(pairs) {
    return pairs.map(pair => {
      if (!pair[1]) {
        Heralds.declareBattleWinner(pair[0].name);
        return pair[0];
      }
      Heralds.declareBattleStepStart(pair[0].name, pair[1].name);
      pair.forEach(member => this.preparationForBattle(member));
      this.simulateBattle(pair);
      return this.getBattleWinnerAndDeclareLoser(pair);
    });
  }

  simulateBattle(pair) {
    const firstMember = pair[0];
    const secondMember = pair[1];
    while (firstMember.isAlive() && secondMember.isAlive()) {
      firstMember.attack(secondMember);
      secondMember.isAlive() && secondMember.attack(firstMember);
      console.log(`${firstMember.name} attack by ${firstMember.getDamage()}`);
      console.log(`${secondMember.name} attack by ${secondMember.getDamage()}`);
      console.log(`${firstMember.name} hp: ${firstMember.getHealth()}`);
      console.log(`${secondMember.name} hp: ${secondMember.getHealth()}`);
      console.log('----');
    }
  }

  preparationForBattle(member) {
    member.attemptToActivateBoost() && Heralds.declareBoostActivation(member.name)
  }

  getBattleWinnerAndDeclareLoser(pair) {
    let winner = {};
    pair.forEach(member => {
      if (member.isAlive()) {
        member.restoreCharProps();
        Heralds.declareBattleWinner(member.name);
        winner = member;
      } else {
        Heralds.declareBattleDeath(member.name)
      }
    });
    return winner;
  }
}

module.exports = {
  Tournament
};