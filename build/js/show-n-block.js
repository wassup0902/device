var show=document.querySelector(".js-show"),checkboxes=document.querySelector(".filter-checkbox"),checkbox=checkboxes.querySelectorAll("input[type='checkbox']"),radios=document.querySelector(".filter-radio"),radio=radios.querySelectorAll("input[type='radio']");show.addEventListener("click",(function(e){for(var o=0;o<checkbox.length;o++)checkbox[o].disabled=!0;for(var c=0;c<radio.length;c++)radio[c].disabled=!0}));