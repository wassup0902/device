var show = document.querySelector(".js-show");

var checkboxes = document.querySelector(".filter-checkbox");
var checkbox = checkboxes.querySelectorAll("input[type='checkbox']");

var radios = document.querySelector(".filter-radio");
var radio = radios.querySelectorAll("input[type='radio']");

show.addEventListener('click', function (block){
  for(var i = 0; i < checkbox.length; i++){
    checkbox[i].disabled = true;
  }
  for(var j = 0; j < radio.length; j++){
    radio[j].disabled = true;
  }
});
