function dictionarySort(input){
    var temp=""
    for(var i=0; i<input.length; i++){
        for(var j=0; j<input.length; j++){
            if(input[j]>input[i] && j!==i){
                temp=input[i]
                input[i]=input[j]
                input[j]=temp
            }
        }
    }
    return input
}

console.log(dictionarySort(['makan','duduk','tidur','terbang']))
console.log(dictionarySort(['anggi','angga','ani','adi']))