var numbers = [1,2,3,4,5,6,7,8,9,10]

for(var i = 1; i < numbers.length; i = i + 1) {
	if( numbers[i] % 2 != 0){
		console.log(numbers[i])
	}
}