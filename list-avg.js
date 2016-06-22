var ask = require('readline-sync')

var myGrades = []

while(true){
	var input = ask.question('Enter a grade: ')

	if (input == 'quit'){
	 break
	}
	var temp = parseFloat(input)
	myGrades.push(temp)
}

var sum = 0
for(var i = 0; i < myGrades.length; i = i + 1){
	sum = sum + myGrades[i]
}

var avg = sum / myGrades.length

console.log('Average grades: ' + avg)