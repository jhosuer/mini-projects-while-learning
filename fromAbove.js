/*
	Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
	make a function that organizes these into individual array that is ordered. 
	For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
	Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
	
*/


let result = [];
let result2 = [];
function answer(fromAbove) {
	fromAbove.sort((a,b) => {
		return a - b;
	});

	for(let index = 0; index < fromAbove.length; index++) {
		 if (typeof fromAbove[index] === 'string') {
			result2.push(fromAbove[index]);
			//fromAbove.splice(index,1)
		}
		else if((fromAbove[index] === fromAbove[index + 1]) || (fromAbove[index] === fromAbove[index - 1])) {
			if((fromAbove[index] === fromAbove[index - 1])) {
				result[result.length -1].push(fromAbove[index]);
			} else {
				result.push([fromAbove[index]]);
			}
		} else {
			result.push(fromAbove[index]);
		}
		
	}
	if (result2.length > 0) {
		let output = [result].concat([result2]);	
		return output;
	} else {
		return result;
	}
	
	

}
//answer([1, "2", "3", 2]);
//answer([1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]) - [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]
//answer([1, "2", "3", 2]) - [[1,2], ["2", "3"]]

//console.log(answer([1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]));
//console.log(answer([1, "2", "3", 2]));
