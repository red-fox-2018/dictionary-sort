/*jshint esversion:6*/
const readline = require('readline');
const arrOfWord = ['makan', 'duduk', 'tidur', 'terbang'];
const arrOfName = ['anggi', 'angga', 'ani', 'adi'];

function dictionary(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let first = arr[i];
      if (arr[i] > arr[j]) {
        arr[i] = arr[j];
        arr[j] = first;
      }
    }
  }
  return arr;
}




console.log(dictionary(arrOfWord)); //duduk,makan,terbang,tidur
console.log(dictionary(arrOfName)); //adi,angga,anggi,ani

module.exports = dictionary;
