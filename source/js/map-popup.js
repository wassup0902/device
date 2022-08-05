var mapLink = document.querySelector(".js-map");
var popup = document.querySelector(".modal-map");
var popupWrite = document.querySelector(".modal-writeus");
var close = popup.querySelector(".modal-close");

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  if(popupWrite.classList.contains("modal-writeus_show")){
    popupWrite.classList.remove("modal-writeus_show");
  }

  if(!popup.classList.contains("modal-map_show")){
    popup.classList.add("modal-map_show");
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  if(popup.classList.contains("modal-map_show")){
    popup.classList.remove("modal-map_show");
  }
});

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode === 27){
    evt.preventDefault();
    if(popup.classList.contains("modal-map_show")){
      popup.classList.remove("modal-map_show");
    }
  }
});
