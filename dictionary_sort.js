// const readline = require('readline');
function Dictionary(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr[i] = [arr[i].toLowerCase(), i];
  }
  var isSort = false;
  while (!isSort) {
    isSort = true;
    for (var i = 1; i < newArr.length; i++) {
      if (newArr[i] < newArr[i - 1]) {
        var temp = newArr[i];
        newArr[i] = newArr[i - 1];
        newArr[i - 1] = temp;
        isSort = false
      }
    }
  }
  var arrSort = [];
  for (var i = 0; i < newArr.length; i++) {
    arrSort[i] = arr[newArr[i][1]];
  }
  return arrSort;
}

// console.log(Dictionary(['makan', 'duduk', 'tidur', 'terbang']));
// console.log(Dictionary(['anggi', 'angga', 'adi', 'ani']));
console.log(Dictionary(['UnA', 'Angga', 'KamBing', 'ani']));

// module.exports = Dictionary
