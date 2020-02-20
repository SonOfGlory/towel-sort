
// You should implement your task here.

module.exports = function towelSort (matrix) {

  return matrix.reduce((acc, val) => Array.isArray(val) ? acc.concat(towelSort(val)) : acc.concat(val), []);
}