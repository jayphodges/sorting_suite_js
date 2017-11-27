const assert = require('chai').assert;
const insertionSort = require("../lib/insertionSort");

describe("insertionSort", function(){
  it("can sort numbers", function(){
    var numbers = [5, 3, 4, 1, 6, 2];
    var sortedNumbers = [1, 2, 3, 4, 5, 6];

    assert.deepEqual(insertionSort(numbers), sortedNumbers);
  });

  it("can sort letters", function(){
    var letters = ['e', 'a', 'c', 'f', 'b', 'd'];
    var sortedLetters = ['a', 'b', 'c', 'd', 'e', 'f'];

    assert.deepEqual(insertionSort(letters), sortedLetters);
  });
});
