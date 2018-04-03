const readline = require('readline');
// your code here to initialize the program and take user input

function dictionarySort(arr) {

  for (var i = 0; i < arr.length; i++) {

    for (var j = i; j < arr.length; j++) {

      let temp = 0

      if (arr[j] < arr[i]) {

        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp

      }

    }

  }

  return arr

}

console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']));

module.exports = Dictionary
