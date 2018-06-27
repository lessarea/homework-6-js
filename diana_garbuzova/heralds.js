class Heralds {
  static declareSetClosure(name) {
    console.log('Извини, ' + name + ', набор на турнир закрыт.');
  }

  static exclusionApplicant(name) {
    console.log(`Извини, ${name}, мы не подходим друг другу и дело в тебе`)
  }

  static magicDrinkAlert(name) {
    console.log(`${name} использует волшебный напиток`);
  }

  static declareRoundStart() {
    console.log('---');
    console.log('LET THE BATTLE BEGIN');
  }

  static declareBattleStepStart(firstMemberName, secondMemberName) {
    console.log('---');
    console.log(`${firstMemberName} vs ${secondMemberName}`);
    console.log('-');
  }

  static declareBattleDeath(name) {
    console.log(`${name} погиб в бою т_т`);
  }

  static declareBattleWinner(name) {
    console.log(`Поздравляю, ${name.toUpperCase()}, ты проходишь дальше!`);
  }

  static declareTournamentWinner(name, championClass) {
    console.log('---');
    console.log('У НАС ЕСТЬ АБСОЛЮТНЫЙ ЧЕМПИОН!');
    console.log(`${championClass} ${name.toUpperCase()}`);
  }
}

module.exports = {
  Heralds
};