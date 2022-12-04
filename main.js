const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

const validateEmail = (email) => {
	return email.match(
	  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);
  };

function sendEmail(ema) {
	if (validateEmail(ema)) {
		Email.send({
			Host : "smtp.elasticemail.com",
			Username : "meruyert.bizhanova@nu.edu.kz",
			Password: "E8368C8937ED3FBF3795F35FEA76C26BBE35",
			To : ema,
			From : "meruyert.bizhanova@nu.edu.kz",
			Subject : "New invitation for collaboration",
			Body : "Thank you for reading my CV! Let's communicate and keep in touch!"
		})
	}
	Email.send({
		Host : "smtp.elasticemail.com",
		Username : "meruyert.bizhanova@nu.edu.kz",
		Password: "E8368C8937ED3FBF3795F35FEA76C26BBE35",
		To : 'azgalormn@gmail.com',
		From : "meruyert.bizhanova@nu.edu.kz",
		Subject : "email from my website",
		Body : ema
	}).then(
		message => alert(message)
	);
}

const form = document.querySelector('form')
form.addEventListener('submit', event => {
	event.preventDefault();
	let email = document.getElementsByName("email")[0].value;
	alert(email)
	form.reset();
	if (email != "") {sendEmail(email)}
	else {alert("email is empty")}
})

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

// sweet support
function personalInfoCard () {
	let card = document.getElementsByClassName('card')[0];
	if(card.classList.contains('activeCard')) {
	  card.classList.remove('activeCard');
	} else {
	  card.classList.add('activeCard');
	}
}

// certs
let swiper = new Swiper('.mySwiper', {
	// Optional parameters
	direction: 'vertical',
	loop: true,
	effect: "cube",
	grabCursor: true,
	cubeEffect: {
	  shadow: true,
	  slideShadows: true,
	  shadowOffset: 20,
	  shadowScale: 0.94,
	},
  
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
   		hide: true,
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	  hide: true,
	},
	
});


sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:200, origin:'bottom'})

