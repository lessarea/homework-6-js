const { Character } = require('./character');

class Monster extends Character {
  constructor(name, health, damage, monsterClass) {
    super(name, health, damage, monsterClass)
  }

  get damage() {
    if (this.shouldUseSkill()) {
      this._counter--;
      return this._damage * 2;
    }
    return this._damage;
  }

  set health(damage) {
    if (this.shouldUseSkill() && this.boost) {
      this._counter--;
      console.log(this.name + ' отражает удар');
    }
    this._health -= damage;
  }
}

module.exports = {
  Monster
};