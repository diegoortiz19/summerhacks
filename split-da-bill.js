//How to split the bill
var ask = require('readline-sync')

var cost = ask.question('What was the meal total? ')

var realCost = parseFloat(cost)

var people = ask.question('How many people are going to split the bill? ')
//Need to convert to integer number
var realPeople = parseInt(people)

var iva = 0.115

var includeIva = ask.question('This price, includes tax? ')

var Gratuity = 0.15

if (includeIva == 'no') {
	var total = (realCost * iva) + realCost
} else {
	var total= realCost
}

var includeGratuity = ask.question('Include Gratuity? ')

var finalSum

if (includeGratuity == 'yes') {
	finalSum = (total * Gratuity) + total
} else {
	finalSum = total
}

var amountPerPerson = total / realPeople

console.log('The total was: ' + finalSum)
console.log('Each person needs to pay: ' + amountPerPerson)