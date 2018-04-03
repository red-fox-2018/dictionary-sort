const readline = require('readline');
// your code here to initialize the program and take user input
function dictionarySort(arr) {
  for (let i in arr) {
    for (let j = Number(i)+1; j < arr.length; j++) {
      if (arr[i].toLowerCase() > arr[j].toLowerCase()) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr.join(',')
}
console.log(dictionarySort(['makan','duduk','tidur','terbang']))
console.log(dictionarySort(['anggi','angga','ani','adi']))

// module.exports = Dictionary
