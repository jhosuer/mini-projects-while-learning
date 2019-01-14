let user = {
	user1: {
		username: 'Joshua',
		password: '123456'
	},
	user2: {
		username: 'Quadri',
		password: 'adghji'
	},
	user3: {
		username: 'Nkem',
		password: '123rdf'
	} 
}

let database = [user];

let newsfeed = [
{username: 'gbenga', timeline: 'so tired from all that learning'},
{username: 'tim handel', timeline: 'JS is so cool!'},
{username: 'wes bos', timeline: 'Teaching makes me come alive'},

];

// let userName = prompt('what is your username?');
// let passWord = prompt('what is your password?');

// function signIn(user,pass) {
// 	if((user === userName) && (pass == passWord)) {
// 		console.log(newsfeed);
// 	} else {
// 		console.dir('username or password is Incorrect');
// 	}
// }

// signIn(user.user1.username,user.user1.password);

for(let res in user) {
	if((user === userName) && (pass == passWord)) {
		console.log(newsfeed);
	} else {
		console.dir('username or password is Incorrect');
	}
}