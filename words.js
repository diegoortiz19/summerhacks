var ask = require('readline-sync')

var sentence = ''

while(true){
	var input = ask.question('Enter a word: ')
	if (input == 'quit'){
	 break
	}
	sentence = sentence + input + ' '
}

console.log(sentence)