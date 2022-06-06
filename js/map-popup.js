var mapLink = document.querySelector(".contacts-map");
var mapPopup = document.querySelector(".modal-map");
var modalClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	if (!mapPopup.classList.contains("modal-show")){
		mapPopup.classList.add("modal-show");
	}
});

modalClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	if (mapPopup.classList.contains("modal-show")){
		mapPopup.classList.remove("modal-show");
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27){
		evt.preventDefault();
		if(mapPopup.classList.contains("modal-show")){
			mapPopup.classList.remove("modal-show");
		}
	}
});