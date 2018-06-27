const { Hero } = require('./hero');
const { Monster } = require('./monster');

const THIEF = 'пушистый вор';
const WARRIOR = 'глупый воин';
const MAGE = 'верховный маг';

const GOBLIN = 'жадный гоблин';
const CROWD_OF_ORCS = 'толпа орков(одинокий гном)';
const VAMPIRE = 'фальшивый вампир';

const heroNames = [
  'Аллиз', 'Немиель', 'Хоккут', 'Вермилиона', 'Cопельмейстер',
  'Лист Икебанный', 'Миррадль', 'Извергатель мглы', 'Просперо',
  'Фроп', 'Неверный котик'
].map(name => name.toLowerCase());

const monsterNames = [
  'Некроцараптер', 'Огнит', 'Иглорыбула', 'Свирепый Клыкар', 'Битвохряк',
  'Деструктода', 'Фурболгов', 'Тигрокрыс', 'Стенолом', 'Злобоглаз',
  'Аманитовый паучок'
].map(name => name.toLowerCase());

const heroClasses = [THIEF, WARRIOR, MAGE];
const monsterClasses = [GOBLIN, CROWD_OF_ORCS, VAMPIRE];

function getAllowedNames(applicant) {
  if (applicant instanceof Hero) {
    return heroNames;
  }
  if (applicant instanceof Monster) {
    return monsterNames;
  }
}

function getAllowedClasses(applicant) {
  if (applicant instanceof Hero) {
    return heroClasses;
  }
  if (applicant instanceof Monster) {
    return monsterClasses;
  }
}

module.exports = {
  THIEF, WARRIOR, MAGE,
  heroNames,
  heroClasses,
  GOBLIN, CROWD_OF_ORCS, VAMPIRE,
  monsterNames,
  monsterClasses,
  getAllowedNames,
  getAllowedClasses
};