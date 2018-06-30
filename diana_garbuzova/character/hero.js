const { Character } = require('./character');

class Hero extends Character {
  constructor(name, health, damage, heroClass) {
    super(name, health, damage, heroClass)
  }

  getDamage() {
    if (this.shouldUseSkill(this.boostCounter) && this.boost) {
      this._boostCounter--;
      console.log(`${this.name} наносит ДВОЙНОЙ удар`);
      return this._damage * 2;
    }
    return this._damage;
  }

  setHealth(damage) {
    if (this.shouldUseSkill(this.counter)) {
      this._counter--;
      console.log(this.name + ' БЛОКИРУЕТ удар');
      return;
    }
    this._health -= damage;
  }
}

module.exports = {
  Hero
};