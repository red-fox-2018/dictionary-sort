function dictionary(array){
    var result = ''
    for(let i=0;i<array.length;i++){
        for(let k=i+1;k<array.length;k++){
            if(array[i].toLowerCase()>array[k].toLowerCase()){
                var tmp = array[i]
                array[i] = array[k]
                array[k] = tmp
            }
        }
        result += array[i]+','
    }
    return result.slice(0,result.length-1)
}

console.log(dictionary(['Makan','duduk','tidur','terBAng']))
console.log(dictionary(['anggi','angga','ani','adi']))