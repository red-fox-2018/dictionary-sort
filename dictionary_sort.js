const readline = require('readline');
var arrOfWord = ['makan', 'duduk','tidur','terbang']
var arr1fWord = ['anggi', 'angga','ani','adi']
// your code here to initialize the program and take user input
function Dictionary(arrIn){
  for(let i = 0; i < arrIn.length; i++){
    let tmp = ''
    for(let j = 0; j < arrIn.length; j++){
        if(arrIn [i] < arrIn[j]){
          tmp = arrIn[i]
          arrIn[i] = arrIn[j]
          arrIn[j] = tmp
        }
    }
  }
  return arrIn.join()
}

console.log(arrOfWord);
console.log(Dictionary(arrOfWord));
console.log(arr1fWord);
console.log(Dictionary(arr1fWord));
module.exports = Dictionary
