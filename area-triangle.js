//Vamos a calcular la area de un triangulo
var ask = require('readline-sync')

var height = ask.question('Give me the height: ')

var base = ask.question('Give me the base: ')

var convertedheight = parseInt(height)

var convertedbase = parseInt(base)

var total = (convertedheight * convertedbase) /2

console.log('Area:' + total)