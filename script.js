const header = document.querySelector("header");

let menu =  document.querySelector('#menu-icon');
let navlist =  document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('ri-close-fill');
	navlist.classList.toggle('active');
};
window.onscroll= () => {
	menu.classList.remove('ri-close-fill');
	navlist.classList.remove('active');
}
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 120);
});



