//Vamos a calcular el IVA
var ask = require('readline-sync')

function addIva (precio, iva) {
var iva = 0.115
var convertedTotal = parseFloat(precio)
var total = (convertedTotal* iva) + convertedTotal
var niceTotal = total.toPrecision(4)
return niceTotal
}

var precio = ask.question('What is the price of the item? ')

var totalOne = addIva(precio)

console.log('Total price ' + totalOne)

var precioDos = ask.question('What is the price of the second item: ')

var totalTwo = addIva(precioDos)

console.log('Total price of second item: ' + totalTwo)