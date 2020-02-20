
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var matrixToString = matrix.toString().replace('[', '').replace(']', '');

  return JSON.parse("[" + matrixToString + "]");
}