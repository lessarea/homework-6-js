class Character {
  constructor(name, health, damage, charClass) {
    this._name = name;
    this._health = health;
    this._damage = damage;
    this._charClass = charClass;
    this._boost = false;
    this._counter = 2;
    this._boostCounter = this._counter;
    this._maxHealth = health;
  }

  get name() {
    return this._name;
  }

  get charClass() {
    return this._charClass;
  }

  get boost() {
    return this._boost;
  }

  get counter() {
    return this._counter;
  }

  get boostCounter() {
    return this._boostCounter;
  }

  getHealth() {
    return this._health;
  }

  restoreCharProps() {
    this._health = this._maxHealth;
    this._counter = 2;
    this._boostCounter = this._counter;
  }

  attack(target) {
    target.setHealth(this._damage);
  }

  shouldUseSkill(counter) {
    return this._health < this._maxHealth / 2 && counter > 0;
  }

  isAlive() {
    return this._health > 0;
  }

  attemptToActivateBoost() {
    return this._boost = Math.random() <= 0.3;
  }
}

module.exports = {
  Character
};