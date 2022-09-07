var link1 = document.querySelector(".content-filter-list li:nth-child(1) > a");
var link2 = document.querySelector(".content-filter-list li:nth-child(2) > a");
var link3 = document.querySelector(".content-filter-list li:nth-child(3) > a");

var arrow1 = document.querySelector(".content-filter-list-arrow li:nth-child(1) > a");
var arrow2 = document.querySelector(".content-filter-list-arrow li:nth-child(2) > a");

var nav1 = document.querySelector(".pages__list li:nth-child(1) > button");
var nav2 = document.querySelector(".pages__list li:nth-child(2) > button");
var nav3 = document.querySelector(".pages__list li:nth-child(3) > button");

link1.addEventListener('click', function (evt){
  if(link2.classList.contains("content-filter-list__link_enabled")){
    link2.classList.remove("content-filter-list__link_enabled");
  }
  if(link3.classList.contains("content-filter-list__link_enabled")){
    link3.classList.remove("content-filter-list__link_enabled");
  }

  link1.classList.add("content-filter-list__link_enabled");
  link1.blur();
});

link2.addEventListener('click', function (evt){
  if(link2.classList.contains("content-filter-list__link_enabled")){
    link2.classList.remove("content-filter-list__link_enabled");
  }
  if(link1.classList.contains("content-filter-list__link_enabled")){
    link1.classList.remove("content-filter-list__link_enabled");
  }

  link2.classList.add("content-filter-list__link_enabled");
  link2.blur();
});

link3.addEventListener('click', function (evt){
  if(link2.classList.contains("content-filter-list__link_enabled")){
    link2.classList.remove("content-filter-list__link_enabled");
  }
  if(link1.classList.contains("content-filter-list__link_enabled")){
    link1.classList.remove("content-filter-list__link_enabled");
  }

  link3.classList.add("content-filter-list__link_enabled");
  link3.blur();
});

arrow1.addEventListener('click', function (evt){
  if(arrow2.classList.contains("content-filter-list-arrow__link_enabled")){
    arrow2.classList.remove("content-filter-list-arrow__link_enabled");
  }

  arrow1.classList.add("content-filter-list-arrow__link_enabled");
  arrow1.blur();
});

arrow2.addEventListener('click', function (evt){
  if(arrow1.classList.contains("content-filter-list-arrow__link_enabled")){
    arrow1.classList.remove("content-filter-list-arrow__link_enabled");
  }

  arrow2.classList.add("content-filter-list-arrow__link_enabled");
  arrow2.blur();
});

nav1.addEventListener('click', function (evt){
  if(nav2.classList.contains("pages__nav_enabled")){
    nav2.classList.remove("pages__nav_enabled");
  }
  if(nav3.classList.contains("pages__nav_enabled")){
    nav3.classList.remove("pages__nav_enabled");
  }

  nav1.classList.add("pages__nav_enabled");
  nav1.blur();
});

nav2.addEventListener('click', function (evt){
  if(nav1.classList.contains("pages__nav_enabled")){
    nav1.classList.remove("pages__nav_enabled");
  }
  if(nav3.classList.contains("pages__nav_enabled")){
    nav3.classList.remove("pages__nav_enabled");
  }

  nav2.classList.add("pages__nav_enabled");
  nav2.blur();
});

nav3.addEventListener('click', function (evt){
  if(nav2.classList.contains("pages__nav_enabled")){
    nav2.classList.remove("pages__nav_enabled");
  }
  if(nav1.classList.contains("pages__nav_enabled")){
    nav1.classList.remove("pages__nav_enabled");
  }

  nav3.classList.add("pages__nav_enabled");
  nav3.blur();
});
