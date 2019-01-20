var h1 = document.getElementById('header');
var button = document.querySelector('button');
var input = document.querySelector('input');
var ul = document.querySelector('ul');
h1.style.backgroundColor = 'yellow';   //inline styling

var p = document.getElementsByTagName('p');
for(let saveP of p) {
	//saveP.style.color = 'red';   //inline styling
}

var second = document.getElementsByClassName('second');

second[0].style.color = 'purple'; //inline styling

ul.style.border = '1px dashed purple'; //inline styling

var li = document.querySelectorAll('li');
for(let list of li) {
	list.style.padding = '5px'; //inline styling
}

h1.className = 'text'; //external styling


p[0].classList.add('p');
console.log(p[0].getAttribute('class'));


function createElement() {
	var li = document.createElement('li');
	var text = document.createTextNode(input.value);
	li.appendChild(text);
	ul.appendChild(li);
	input.value = '';
}

function clickToAdd() {
	if(input.value != '') {
		createElement();
	}
}

function hitKeyToAdd(event) {
	if((input.value != '') && (event.keyCode === 13)) {
		createElement();
	}
}

button.addEventListener('click', clickToAdd);

input.addEventListener('keypress', hitKeyToAdd);