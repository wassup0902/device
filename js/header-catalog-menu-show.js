var modalButton1 = document.querySelector(".js-catalog");
var modal1 = document.querySelector(".header-catalog-menu");

modalButton1.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal1.classList.toggle("header-catalog-menu-show");
});