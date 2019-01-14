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

let database = [user.user1,user.user2,user.user3];

let newsfeed = [
{username: 'gbenga', timeline: 'so tired from all that learning'},
{username: 'tim handel', timeline: 'JS is so cool!'},
{username: 'wes bos', timeline: 'Teaching makes me come alive'},

];

let userName = prompt('what is your username?');
let passWord = prompt('what is your password?');

function signIn() {
	for(let res of database) {
		if((res.username === userName) && (res.password == passWord)) {
			return newsfeed;
		}
	}
	return `username or password is Incorrect`;
}

console.log(signIn());

