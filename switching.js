function testMe(value) {
	let response = '';
	switch(value) {
		case 5: 
			response = 'yea you sat on the pass mark';
			break;
		case 7: 
			response = 'oh yea you are an high scorer';
			break;
		case (value < 5): 
			response = 'oh oh, :) you should try again. DON\'T QUIT';
			break;
		case (value == 10):
			response = 'bravo, you aced our test';
			break;
		case (value == 0):
			response = 'you probably went MIA';
			break;
		default:
			response = 'enter your test score in digit(s)';
	}
	return response;
}

console.log(testMe(1));
console.log(testMe(5));
console.log(testMe(6));
console.log(testMe(10));
console.log(testMe(0));
