const readline = require('readline');
// your code here to initialize the program and take user input
function sortWords(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i].toLowerCase()>arr[j].toLowerCase()){
                var temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr.join(',')
}

var arrOfWord = ['makan','duduk','tidur','terbang']
console.log(sortWords(arrOfWord))
var arrOfWord = ['anggi', 'angga', 'ani', 'adi']
console.log(sortWords(arrOfWord))

// module.exports = Dictionary
