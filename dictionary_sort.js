const readline = require('readline');
// your code here to initialize the program and take user input

function Dictionary(arrWords) {

    for (let i = arrWords.length-1; i >= 0; i--) {
        
        for (let j = arrWords.length-1; j >= 0; j--) {
            
            if(arrWords[j] < arrWords[j-1]) {

                let temp = arrWords[j]
                arrWords[j] = arrWords[j-1]
                arrWords[j-1] = temp 
            }
        }
    }

    return arrWords
}

console.log(Dictionary(['makan','duduk','tidur','terbang']));
console.log(Dictionary(['anggi','angga','ani','adi']));

// module.exports = Dictionary
