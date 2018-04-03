/*
PSEUDOCODE

1. buat variabel berisi input
2. di dalam function dictionary, buat looping sebanyak 2 kali. yang satu sepanjang variabel input, yang satunya (di dalam looping pertama) sepanjang kurang dari i (looping pertama). serta jadikan variabel input sebagai parameternya
  2.a. jika input[i] lebih kecil dari input[j]
    2.a.i. tukar posisi input[i] dengan input[j] dengan bantuan variabel temp
3. return parameter yang di join
*/

const readline = require('readline');
// your code here to initialize the program and take user input
var arrOfWord = ['makan', 'duduk', 'tidur', 'terbang'];
function Dictionary(arrOfWord) {
  for (var i = 0; i < arrOfWord.length; i++) {
    for (var j = 0; j < i; j++) {
      if (arrOfWord[i] < arrOfWord[j]) {
        var temp = arrOfWord[i];
        arrOfWord[i] = arrOfWord[j];
        arrOfWord[j] = temp
      }
    }
  }
  return arrOfWord.join();
}

console.log(Dictionary(arrOfWord))

module.exports = Dictionary
