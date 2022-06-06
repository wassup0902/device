var writeUsLink = document.querySelector(".about-n-contacts-button-right a");
var writeUsPopup = document.querySelector(".modal-writeus");
var writeUsClose = writeUsPopup.querySelector(".modal-close");

writeUsLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	if (!writeUsPopup.classList.contains("modal-show")){
		writeUsPopup.classList.add("modal-show");
	}
});

writeUsClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	if (writeUsPopup.classList.contains("modal-show")){
		writeUsPopup.classList.remove("modal-show");
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27){
		evt.preventDefault();
		if(writeUsPopup.classList.contains("modal-show")){
			writeUsPopup.classList.remove("modal-show");
		}
	}
});