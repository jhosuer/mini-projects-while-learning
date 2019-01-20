function planTask(container) {
	let input = container.querySelector('#task');
	let ul = container.querySelector('ul');
	let button = container.querySelector('#enter');

	button.addEventListener('click', function(){

		if(input.value != '') {
			let li = container.createElement('li');
			let delButton = container.createElement('button');
			let delText = container.createTextNode('delete');
			let text = container.createTextNode(input.value);
			let space = container.createTextNode(' ');
			delButton.appendChild(delText);
			delButton.className = 'del';
			delButton.setAttribute('id','dele');
			li.appendChild(text);
			li.appendChild(space);
			li.appendChild(delButton)
			ul.appendChild(li);

			let list = container.querySelector('li');
			let delBut = container.querySelector('.del');

			let liList = Array.from(list);

			console.log(li);
			list.classList.toggle('done');


			delBut.addEventListener('click',function(event){

				ul.removeChild(li);
			});


			
		}

	});

	

	


}

planTask(document);