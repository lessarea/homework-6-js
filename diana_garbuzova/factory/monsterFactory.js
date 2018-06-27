const { GOBLIN, CROWD_OF_ORCS, VAMPIRE } = require('../character/charactersOptions');
const { CharacterFactory, DEFAULT_PROPS } = require('./characterFactory');
const { Monster } = require('../character/monster');

const GOBLIN_PROPS = { health: 200, damage: 35 };
const CROWD_OF_ORCS_PROPS = { health: 300, damage: 15 };
const VAMPIRE_PROPS = { health: 350, damage: 25 };

class MonsterFactory extends CharacterFactory {
  create(name, monsterClass) {
    const { health, damage } = getPropsForMonster(monsterClass);
    return new Monster(name, health, damage, monsterClass);
  }
}

function getPropsForMonster(type) {
  switch (type) {
    case GOBLIN:
      return GOBLIN_PROPS;
    case CROWD_OF_ORCS:
      return CROWD_OF_ORCS_PROPS;
    case VAMPIRE:
      return VAMPIRE_PROPS;
    default:
      return DEFAULT_PROPS;
  }
}

module.exports = {
  MonsterFactory
};