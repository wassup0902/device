var prev = document.querySelector(".pages__prev");
var next = document.querySelector(".pages__next");

var nav1 = document.querySelector(".pages__list li:nth-child(1) > button");
var nav2 = document.querySelector(".pages__list li:nth-child(2) > button");
var nav3 = document.querySelector(".pages__list li:nth-child(3) > button");

var checkboxes = document.querySelector(".filter-checkbox");
var checkbox = checkboxes.querySelectorAll("input[type='checkbox']");

var radios = document.querySelector(".filter-radio");
var radio = radios.querySelectorAll("input[type='radio']");

function check(){
  for(var i = 0; i < checkbox.length; i++){
    if(checkbox[i].checked){
      checkbox[i].blur();
    }
  }
}

function checkr(){
  for(var i = 0; i < radio.length; i++){
    if(radio[i].checked){
      radio[i].blur();
    }
  }
}

prev.onmouseout = function (evt) {
  prev.blur();
};

next.onmouseout = function (evt) {
  next.blur();
};

nav1.onmouseout = function (evt) {
  nav1.blur();
};


nav2.onmouseout = function (evt) {
  nav2.blur();
};

nav3.onmouseout = function (evt) {
  nav3.blur();
};
