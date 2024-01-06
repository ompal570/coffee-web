let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
	navbar.classList.toggle('active');

	searchform.classList.remove('active');
	cartiteam.classList.remove('active');
}



let cartiteam = document.querySelector('.cart-items-container');


document.querySelector('#cart-btn').onclick = () =>{
	cartiteam.classList.toggle('active');
	navbar.classList.remove('active');
	searchform.classList.remove('active');
	}

let searchform = document.querySelector('.search-form');


document.querySelector('#search-btn').onclick = () =>{
	searchform.classList.toggle('active');
	navbar.classList.remove('active');
	
	cartiteam.classList.remove('active');
}

window.onscroll = () =>{
	navbar.classList.remove('active');
	searchform.classList.remove('active');
	cartiteam.classList.remove('active');
}