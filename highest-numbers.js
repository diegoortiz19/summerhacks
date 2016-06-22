

function searchHigh(listOfNumbers){
	var largeNumber = listOfNumbers[0]
for(var index = 0; index < listOfNumbers.length; index = index + 1) {
if (index == 0) {
	largeNumber = listOfNumbers[index]
}
if(largeNumber < listOfNumbers[index]) {
	 largeNumber = listOfNumbers[index]
	}
  }
  return largeNumber
}

var numbers = [3, 5, 24, 0, 4, 911]

var highestNumber = searchHigh(numbers)

console.log(highestNumber)