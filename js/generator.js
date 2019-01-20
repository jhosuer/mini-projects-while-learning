/* youmightnotneedjquery.com */

let text = document.querySelector('h3');
let color1 = document.querySelector('#first');
let color2 = document.querySelector('#second');

function colorGenerator() {

	text.innerHTML = `${color1.value} ${color2.value}`;
	addEvent(color1);
	addEvent(color2);

}


function addEvent(event) {
	return event.addEventListener('input',()=>{
		document.body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	});
}

colorGenerator();