//const readline = require('readline');
var Dictionary_sort = function(arr_words){
    for(let i=0;i<arr_words.length;i++){
        let a=0;
        for(let j=i+1;j<arr_words.length;j++){
            if(arr_words[i].toLowerCase() > arr_words[j].toLowerCase()){
                let temp = arr_words[i];
                arr_words[i] = arr_words[j]
                arr_words[j] = temp;
            }
            a = 0;
        }
    }
    return arr_words;
}

console.log(Dictionary_sort(['makan','duduk','tidur','terbang']))//[ 'duduk', 'makan', 'terbang', 'tidur' ]
console.log(Dictionary_sort(['anggi','angga','ani','adi']))//['adi','angga','anggi','ani']
//module.exports = Dictionary
