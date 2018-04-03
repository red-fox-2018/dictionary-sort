
const readline = require('readline');
// your code here to initialize the program and take user input

function dictionary(array) {
  // bubble sort
  let len = array.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (array[j].toLowerCase() > array[j + 1].toLowerCase()) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array.join(',');
}

let data = ['word', 'alfa', 'Beta'];

console.log(dictionary(data)); // alfa,Beta,word

console.log(dictionary(['makan', 'Duduk', 'tidur', 'Terbang'])); // duduk,makan,terbang,tidur


// module.exports = Dictionary