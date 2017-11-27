const assert = require('chai').assert;
const bubbleSort = require("../lib/bubbleSort");

describe("bubbleSort", function(){
  it("can sort numbers", function(){
    var numbers = [5, 3, 4, 1, 6, 2];
    var sortedNumbers = [1, 2, 3, 4, 5, 6];

    assert.deepEqual(bubbleSort(numbers), sortedNumbers);
  });

  it("can sort letters", function(){
    var letters = ['e', 'a', 'c', 'f', 'b', 'd'];
    var sortedLetters = ['a', 'b', 'c', 'd', 'e', 'f'];

    assert.deepEqual(bubbleSort(letters), sortedLetters);
  });
});
