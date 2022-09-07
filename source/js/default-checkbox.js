var checkboxes = document.querySelector(".filter-checkbox");
var checkbox = checkboxes.querySelectorAll("input[type='checkbox']");

var radios = document.querySelector(".filter-radio");
var radio = radios.querySelectorAll("input[type='radio']");

document.addEventListener("DOMContentLoaded", function (reload) {
  checkbox[0].checked = true;
  checkbox[1].checked = false;
  checkbox[2].checked = true;
  checkbox[3].checked = true;
  checkbox[4].checked = false;
  radio[0].checked = true;
  radio[1].checked = false;
});
