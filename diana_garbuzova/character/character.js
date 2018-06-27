class Character {
  constructor(name, health, damage, charClass) {
    this._name = name;
    this._health = health;
    this._damage = damage;
    this._charClass = charClass;
    this._magicDrink = false;
    this._counter = 2;
    this._maxHealth = health;
  }

  get name() {
    return this._name;
  }

  get charClass() {
    return this._charClass;
  }

  get boost() {
    return this._magicDrink;
  }

  restoreHealth() {
    this._health = this._maxHealth
  }

  attack(target) {
    target.health = this._damage;
  }

  attemptToUseMagicDrink() {
    this._magicDrink = Math.random() <= 0.3;
  }

  shouldUseSkill() {
    return (this._health < this._maxHealth / 2 && this._counter > 0);
  }

  isAlive() {
    return this._health > 0;
  }
}

module.exports = {
  Character
};