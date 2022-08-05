var mapWrite = document.querySelector(".js-writeus");
var popupWrite = document.querySelector(".modal-writeus");
var popup = document.querySelector(".modal-map");
var close = popupWrite.querySelector(".modal-close");

mapWrite.addEventListener("click", function(evt) {
  evt.preventDefault();
  if(popup.classList.contains("modal-map_show")){
    popup.classList.remove("modal-map_show");
  }
  if(!popupWrite.classList.contains("modal-writeus_show")){
    popupWrite.classList.add("modal-writeus_show");
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  if(popupWrite.classList.contains("modal-writeus_show")){
    popupWrite.classList.remove("modal-writeus_show");
  }
});

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode === 27){
    evt.preventDefault();
    if(popupWrite.classList.contains("modal-writeus_show")){
      popupWrite.classList.remove("modal-writeus_show");
    }
  }
});
