const readline = require('readline');


var arrOfWord = (arr) => {
  for (var a = 0; a < arr.length; a++) {
      for (var b = 0; b < arr.length; b++) {
          if (arr[a] < arr[b]) {
              var low = arr[a];
              arr[a] = arr[b];
              arr[b] = low;
          }
      }
  }
  return arr;
}

console.log(arrOfWord(['makan', 'duduk', 'tidur', 'terbang']));
console.log(arrOfWord(['anggi', 'angga', 'ani', 'adi']));
