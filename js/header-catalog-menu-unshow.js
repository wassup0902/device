var slide1 = document.querySelector(".slide1");
var slide2 = document.querySelector(".slide2");
var slide3 = document.querySelector(".slide3");
var modal2 = document.querySelector(".header-catalog-menu");

slide1.onmouseover = function (evt) {
	if(modal2.classList.contains("header-catalog-menu-show")) {
		modal2.classList.remove("header-catalog-menu-show");
	}
}

slide2.onmouseover = function (evt) {
	if(modal2.classList.contains("header-catalog-menu-show")) {
		modal2.classList.remove("header-catalog-menu-show");
	}
}

slide3.onmouseover = function (evt) {
	if(modal2.classList.contains("header-catalog-menu-show")) {
		modal2.classList.remove("header-catalog-menu-show");
	}
}