let input1 = document.getElementById('first');
let input2 = document.getElementById('second');
let h3 = document.querySelector('h3');

function generateColor(container) {

	addEvent(input1);
	addEvent(input2);
}

function addEvent(event) {
	return event.addEventListener('input',()=>{
		document.body.style.background = `linear-gradient(to right, ${input1.value}, ${input2.value})`;
		h3.innerHTML = `${input1.value} ${input2.value}`;
	});
}

generateColor(document);