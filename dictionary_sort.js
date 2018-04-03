// const readline = require('readline');
/*
LOOP from 0 to arr length and plus one for every iteration
        LOOP from 0 to arr length and plus one for every iteration
            IF arr[i] smallest than arr[j]
                INITIALIZE temp to arr[i]
                CHANGE arr[i] to arr[j]
                CHANGE arr[j] to temp
    RETURN arr
*/

// your code here to initialize the program and take user input
function dictionarySort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']));

// module.exports = Dictionary
