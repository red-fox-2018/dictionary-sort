const readline = require('readline');
// your code here to initialize the program and take user input

function dictionarySort(input){
  for(let i = 0; i < input.length; i++){
    let indexMin = i
    for(let j = i+1; j < input.length; j++){
      if(input[j] < input[indexMin]){
        indexMin = j
      }
    }

    let tmp         = input[i]
    input[i]        = input[indexMin]
    input[indexMin] = tmp
  }
  return input
}


console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']));




module.exports = dictionarySort
