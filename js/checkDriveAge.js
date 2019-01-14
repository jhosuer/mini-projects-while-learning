// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:


//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"

function checkDriveAge() {
	let age = prompt('what is your age?');
	let usersAge = Number(age);
	if((typeof usersAge == 'number') && (Number.isInteger(usersAge) == true)){
		if(usersAge == 18) {		 	
			console.log("Congratulations on your first year of driving. Enjoy the ride!");
		} else if(usersAge > 18) {
			console.log('Powering On. Enjoy the ride!');
		} else {
			console.log("Sorry, you are too young to drive this car. Powering off");
		}
	} else {
		console.log('Age should be a whole number');
	}
}

checkDriveAge();