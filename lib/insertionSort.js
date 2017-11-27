function insertionSort (array) {
  for (var i = 0; i < array.length; i++) {
    let sort = array[i]
    for (var n = i - 1; n > -1 && array[n] > sort; n--) {
      array[n + 1] = array[n]
    }
    array[n + 1] = sort
  }
  return array;
};
module.exports = insertionSort;
