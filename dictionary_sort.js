const readline = require('readline');
// your code here to initialize the program and take user input
function DictionarySort(string){ 
	// body...
	var pembanding = string[0]
	for(var i=0;i<string.length;i++){
		for(var j=0;j<string.length-1;j++){
				if (string[j]>string[j+1]) {
					pembanding=string[j]
					string[j]=string[j+1]
					string[j+1]=pembanding
			}
		}
	}
	return string
}
console.log(DictionarySort(['makan','bobo','tidur', 'terbang','macan','maban']));
console.log(DictionarySort(['angfa','angga','anggi','adi','ani','ada']));
console.log(DictionarySort(['agg','agf','age','aab','aba','abb']));
//module.exports = Dictionary
