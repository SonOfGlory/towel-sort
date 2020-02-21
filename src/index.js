
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var i = 0;
  var towelArray = [];
  if (typeof matrix !== 'undefined' && matrix.length > 0) {
    (function towelSortRecursion(matrix) {
      matrix.forEach(function(element) {
        if (Array.isArray(element))  { if(i % 2) element.reverse(); towelSortRecursion(element);}
        else towelArray.push(element);
      });
      i=i+1;
    })(matrix);
    return towelArray;
  }
  else return [];
}
