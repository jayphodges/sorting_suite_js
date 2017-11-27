function bubbleSort(array) {
  let done = true;
  while(done) {
    done = false;
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let swap = array[i];
        array[i] = array[i + 1];
        array[i + 1] = swap;
        done = true;
      }
    }
  }
  return array;
};
// function bubbleSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let n = i + 1; n < array.length - i; n++) {
//       if (array[n - 1] > array[n]) {
//         let swap = array[n - 1]
//         array[n - 1] = array[n]
//         array[n] = swap
//       }
//     }
//   }
//   return array;
// };
module.exports = bubbleSort;
