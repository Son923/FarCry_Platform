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
			let li1 = document.querySelectorAll('nav ul li');
			Array.prototype.forEach.call(li1, function(l1) {
				l1.classList.remove('selected');
				l1.classList.add('notselected');
			});
			event.path[1].classList.toggle('selected');
			event.path[1].classList.remove('notselected');
		})
	});
})
