function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIndex(arr) {
  return getRandomNumber(0, arr.length - 1);
}

function removeItemsByIndex(target, ...indices) {
  indices.sort((a, b) => b - a).forEach(index => target.splice(index, 1))
}

function isOptionValid(comparisonOptions, param) {
  for (let verifiable of comparisonOptions) {
    if (verifiable === param) {
      return true;
    }
  }
  return false;
}

module.exports = {
  getRandomNumber, getRandomIndex,
  removeItemsByIndex,
  isOptionValid
};