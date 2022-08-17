import '../scss/main.scss';

const bugerIcon = document.querySelector('.nav__burger');
const navList = document.querySelector('.nav__list');
const navItemList = document.querySelectorAll('.nav__list__item');

const navigationHandler = () => {
	navList.classList.toggle('nav__list--active');
	console.log('clicked');
};

navItemList.forEach(e =>
	e.addEventListener('click', () => {
		navList.classList.remove('nav__list--active');
	})
);

bugerIcon.addEventListener('click', navigationHandler);

