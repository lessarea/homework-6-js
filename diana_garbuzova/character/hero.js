const { Character } = require('./character');

class Hero extends Character {
  constructor(name, health, damage, heroClass) {
    super(name, health, damage, heroClass)
  }

  get damage() {
    if (this.shouldUseSkill() && this.boost) {
      this._counter--;
      return this._damage * 2;
    }
    return this._damage;
  }

  set health(damage) {
    if (this.shouldUseSkill()) {
      this._counter--;
      console.log(this.name + ' блокирует удар');
    }
    this._health -= damage;
  }
}

module.exports = {
  Hero
};