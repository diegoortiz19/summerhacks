//Number is even or odd
var ask = require('readline-sync')

var number = ask.question('Give me a number: ')

var intNumber = parseInt(number)

if (intNumber % 2 == 0 ) {
	console.log('it is an even number')
} else {
	conosle.log('it is an odd number')
}
