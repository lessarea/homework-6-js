const { Character } = require('./character');

class Monster extends Character {
  constructor(name, health, damage, monsterClass) {
    super(name, health, damage, monsterClass)
  }

  getDamage() {
    if (this.shouldUseSkill(this.counter)) {
      this._counter--;
      console.log(`${this.name} наносит ДВОЙНОЙ удар`);
      return this._damage * 2;
    }
    return this._damage;
  }

  setHealth(damage) {
    if (this.shouldUseSkill(this.boostCounter) && this.boost) {
      this._boostCounter--;
      console.log(this.name + ' ОТРАЖАЕТ удар');
      return;
    }
    this._health -= damage;
  }
}

module.exports = {
  Monster
};