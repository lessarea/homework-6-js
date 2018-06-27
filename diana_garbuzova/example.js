const {
  heroNames, heroClasses,
  monsterNames, monsterClasses
} = require('./character/charactersOptions');
const { MonsterFactory } = require('./factory/monsterFactory');
const { HeroFactory } = require('./factory/heroFactory');
const { Tournament } = require('./tournament');
const { getRandomIndex } = require('./utils');

const tournament = new Tournament(6);

const hero = new HeroFactory();
const monster = new MonsterFactory();

tournament.registration(hero.create('аллиз', 'пушистая зайка'));

for (let i = 0; i < 3; i++) {
  tournament.registration(hero.create(
      heroNames[getRandomIndex(heroNames)],
      heroClasses[getRandomIndex(heroClasses)]));

  tournament.registration(monster.create(
      monsterNames[getRandomIndex(monsterNames)],
      monsterClasses[getRandomIndex(monsterClasses)]));
}

tournament.startRound();