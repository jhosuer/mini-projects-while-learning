function randomizeColor() {
	let colorValues = ['A','B','C','D','E','F'];
	let color = '';
	for(let index = 0; index < colorValues.length; index++) {
		color += colorValues[Math.floor(Math.random() * 6)];
	}
	return color;
}


function connectWithDOM() {
	let header = document.querySelector('h3');
	return header.style.color = '#' + randomizeColor();
}


setInterval(()=>{
	connectWithDOM();
},2000)