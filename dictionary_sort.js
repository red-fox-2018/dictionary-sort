const readline = require('readline');
// your code here to initialize the program and take user input
function sort(arr) {
  var min;
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr.length; j++) {
      if(arr[i] < arr[j]) {
        min = arr[j]
        arr[j] = arr[i]
        arr[i] = min
      }
    }
  }
  // console.log(arr);
  return arr.join(',')
}

// module.exports = Dictionary

console.log(sort(['makan', 'duduk', 'tidur', 'terbang']));
console.log(sort(['anggi', 'angga', 'ani', 'adi']));
