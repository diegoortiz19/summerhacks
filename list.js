var carBrands = ['toyota', 'ford', 'honda', 'nissan']

var numbersLength = carBrands.length

console.log('The list has: ' + numbersLength + ' items')

var temp = carBrands[2]

console.log('The item in position 2 is: ' + temp)

carBrands.push('suzuki')

console.log('The item at the end of the list is: ' + carBrands[4])

carBrands.push('LOL')

console.log('Added item : ' + carBrands[5])

carBrands.pop()

carBrands.pop()

console.log('Last item: ' + carBrands[3])

var newLength = carBrands.length

console.log('New list size: ' + newLength)

console.log('My car brands: ' + carBrands)