function randomizeColor() {
	let colorValues = ['A','B','C','D','E','F'];
	let color = '';
	for(let index = 0; index < colorValues.length; index++) {
		color += colorValues[Math.floor(Math.random() * 6)];
	}
	return color;
}

function connectWithDOM() {
	let header1 = document.getElementById('leftEye');
	let header2 = document.getElementById('rightEye');
	header1.style.backgroundColor = '#' + randomizeColor();
	header2.style.backgroundColor = '#' + randomizeColor();
	return header1, header2;
}
setInterval(connectWithDOM,2000)

function setupDance() {
	let left = document.getElementById('leftLeg');
	if(left.style.transform == 'skewX(0deg)') {
		return left.style.transform = 'skewX(-20deg)';
	} else {
		left.style.transform = 'skewX(0deg)';
	}

	let right = document.getElementById('rightLeg');
	if(right.style.transform == 'skewX(0deg)') {
		return right.style.transform = 'skewX(20deg)';
	} else {
		right.style.transform = 'skewX(0deg)';
	}	
}
setInterval(setupDance,600);