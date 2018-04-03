const readline = require('readline');
// your code here to initialize the program and take user input
function Dictionary(arr){
  // insertion sort
  for(let i = 1; i < arr.length; i++){
    let tmp = i;
    for(let j = tmp-1; j >= 0; j--){
      if(arr[j].toLowerCase() > arr[tmp].toLowerCase()){
        [arr[tmp], arr[j]] = [arr[j], arr[tmp]];
        tmp = j;
      }
    }
  }
  return arr
}
console.log(Dictionary(['makan', 'duduk', 'tidur', 'terbang', 'Putar', 'ApA', 'apa']));
console.log(Dictionary(['anggi', 'angga', 'ani', 'adi']));

module.exports = Dictionary
