var slide = document.querySelector(".slider-container");
var showCatalog = document.querySelector(".navigation-menu__show-catalog");

slide.onmouseover = function (evt) {
  showCatalog.blur();
}
