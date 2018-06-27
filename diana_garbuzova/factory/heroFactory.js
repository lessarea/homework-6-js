const { THIEF, WARRIOR, MAGE } = require('../character/charactersOptions');
const { CharacterFactory, DEFAULT_PROPS } = require('./characterFactory');
const { Hero } = require('../character/hero');

const THIEF_PROPS = { health: 250, damage: 30 };
const WARRIOR_PROPS = { health: 300, damage: 25 };
const MAGE_PROPS = { health: 200, damage: 40 };

class HeroFactory extends CharacterFactory {
  create(name, heroClass) {
    const { health, damage } = getPropsForHero(heroClass);
    return new Hero(name, health, damage, heroClass);
  }
}

function getPropsForHero(type) {
  switch (type) {
    case THIEF:
      return THIEF_PROPS;
    case WARRIOR:
      return WARRIOR_PROPS;
    case MAGE:
      return MAGE_PROPS;
    default:
      return DEFAULT_PROPS;
  }
}

module.exports = {
  HeroFactory
};