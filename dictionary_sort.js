// const readline = require('readline');
//
// module.exports = Dictionary
function dictionarySort(arrOfWord){
  let condition = false;
  while (condition === false) {
    for (var i = 0; i < arrOfWord.length; i++) {
      if (arrOfWord[i] > arrOfWord[i+1] ) {
        arrOfWord.splice(i, 2, arrOfWord[i+1], arrOfWord[i])
        condition = true;
      }
    }
    for (var i = 0; i < arrOfWord.length; i++) {
      if (arrOfWord[i] > arrOfWord[i+1] ) {
        condition = false;
      }
    }
  }
  return arrOfWord
}
console.log(dictionarySort(['anggi','angga','ani','adi']));
