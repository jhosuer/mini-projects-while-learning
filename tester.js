/*function experiencePoints() {
    // if (true) {
    //     return 10;
    // } else {
    //     return 1;
    // }
   false ? console.log(10) :  console.log(1);
}

experiencePoints();*/


// class Animal {
// 	constructor(name, type, color) {
// 		this.name = name;
// 		this.type = type;
// 		this.color = color;
// 	}
// }

// class Mamal extends Animal {
// 	constructor(name, type, color) {
// 		super(name, type, color);
// 	}

// 	sound () {
// 		console.log(`${this.name}, has a type of ${this.type} and a color of ${this.color} `);
// 	}
// }


// let anim1 = new Mamal('cow','mamal','white');
// anim1.sound();
















// Solve the below problems:


// #1) Check if this array includes the name "John".
// const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
// console.log(dragons.includes('John'));

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
// const dragons2 = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
// res = [];
// for(let index = 0; index < dragons2.length; index++) {
// 	if(dragons2[index].split('John').length > 1) {
// 		res.push(dragons2[index]);
// 	}
// }
// console.log(res);
// // #3) Create a function that calulates the power of 100 of a number entered as a parameter
// 	function numberPower(number) {
// 		return number ** 100;
// 	}
// 	console.log(numberPower(2));

// // #4) Using your function from #3, put in the paramter 10000. What is the result?
// // Research for yourself why you get this result
// 	console.log(numberPower(10000));














// #1) Line up the Turtle and the Rabbit at the start line:
// const startLine = '     ||<- Start line';
// let turtle = '🐢';
// let rabbit = '🐇';

// // it should look like this:
// '     ||<- Start line'
// '       🐢'
// '       🐇'

// console.log(turtle = turtle.trim().padEnd(9, '='));
// turtle = '🐢'.padStart(9);
// rabbit = '🐇'.padStart(9);
// // when you do:
// console.log(startLine);
// console.log(turtle);
// console.log(rabbit);


let a = [1, "2", 3, "4", "5"];
let res = [];

for(let b = 0; b < a.length; b++) {

	if(typeof a[b] == 'string') {
		res.push(a[b]);

	}
}
console.log(res);