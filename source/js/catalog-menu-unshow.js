var slide = document.querySelector(".index-main__slider-container");
var showCatalog = document.querySelector(".navigation-menu__show-catalog");

slide.onmouseover = function (evt) {
  showCatalog.blur();
}
