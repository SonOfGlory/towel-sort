
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var towelArray = [];
  (function towelSortRecursion(matrix) {
    matrix.forEach(function(element) {
      if (matrix.isArray(element))  towelSortRecursion(element);
      else towelArray.push(element);
    });
  })(matrix);
  return towelArray;
}
