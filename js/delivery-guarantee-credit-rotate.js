var delivery = document.querySelector(".delivery-guarantee-credit-navigation .delivery");
var guarantee = document.querySelector(".delivery-guarantee-credit-navigation .guarantee");
var credit = document.querySelector(".delivery-guarantee-credit-navigation .credit");

var slide4 = document.querySelector(".delivery-guarantee-credit-container1");
var slide5 = document.querySelector(".delivery-guarantee-credit-container2");
var slide6 = document.querySelector(".delivery-guarantee-credit-container3");

delivery.addEventListener("click", function (evt) {
	evt.preventDefault();
	if(slide5.classList.contains("slide1-show")){
		slide5.classList.remove("slide1-show");
	}
	if(slide6.classList.contains("slide1-show")){
		slide6.classList.remove("slide1-show");
	}
	if(!slide4.classList.contains("slide1-show")){
		slide4.classList.add("slide1-show");
	}
});

guarantee.addEventListener("click", function (evt) {
	evt.preventDefault();
	if(slide4.classList.contains("slide1-show")){
		slide4.classList.remove("slide1-show");
	}
	if(slide6.classList.contains("slide1-show")){
		slide6.classList.remove("slide1-show");
	}
	if(!slide5.classList.contains("slide1-show")){
		slide5.classList.add("slide1-show");
	}
});

credit.addEventListener("click", function (evt) {
	evt.preventDefault();
	if(slide4.classList.contains("slide1-show")){
		slide4.classList.remove("slide1-show");
	}
	if(slide5.classList.contains("slide1-show")){
		slide5.classList.remove("slide1-show");
	}
	if(!slide6.classList.contains("slide1-show")){
		slide6.classList.add("slide1-show");
	}
});

delivery.onfocus = function (evt) {
	evt.preventDefault();
	if(slide5.classList.contains("slide1-show")){
		slide5.classList.remove("slide1-show");
	}
	if(slide6.classList.contains("slide1-show")){
		slide6.classList.remove("slide1-show");
	}
	if(!slide4.classList.contains("slide1-show")){
		slide4.classList.add("slide1-show");
	}
};

guarantee.onfocus = function (evt) {
	evt.preventDefault();
	if(slide4.classList.contains("slide1-show")){
		slide4.classList.remove("slide1-show");
	}
	if(slide6.classList.contains("slide1-show")){
		slide6.classList.remove("slide1-show");
	}
	if(!slide5.classList.contains("slide1-show")){
		slide5.classList.add("slide1-show");
	}
};

credit.onfocus = function (evt) {
	evt.preventDefault();
	if(slide4.classList.contains("slide1-show")){
		slide4.classList.remove("slide1-show");
	}
	if(slide5.classList.contains("slide1-show")){
		slide5.classList.remove("slide1-show");
	}
	if(!slide6.classList.contains("slide1-show")){
		slide6.classList.add("slide1-show");
	}
};