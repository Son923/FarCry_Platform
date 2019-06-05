//This simple script handles the header nav menu modal
//also covered nav sub menu selection
//Dependencies: jQuery

console.log('home js');
document.addEventListener('DOMContentLoaded', () => {
	let burger = document.getElementsByClassName('burger');
	Array.prototype.forEach.call(burger, function(b) {
		b.addEventListener('click', () => {
			let header = document.querySelector('header');
			header.classList.toggle("clicked");
		})
	});
	let li = document.querySelectorAll('nav ul li');
	Array.prototype.forEach.call(li, function(l) {
		l.addEventListener('click', (event) => {
			let gamePathDiv = document.getElementById('inner-setting');
			let li1 = document.querySelectorAll('nav ul li');
			console.log(li1)
			Array.prototype.forEach.call(li1, function(l1) {
				console.log(l1.innerHTML);
				l1.classList.remove('selected');
				l1.classList.add('notselected');
			});
			if (gamePathDiv.className.split(" ").indexOf("selected") !== -1) {
				gamePathDiv.classList.add('selected');
				gamePathDiv.classList.remove('notselected');
			}
			else {

			}
			event.path[1].classList.toggle('selected');
			event.path[1].classList.remove('notselected');
		})
	});
	
})