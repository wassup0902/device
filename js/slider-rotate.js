var slideRadio = document.querySelectorAll("input[name='slider-radio']");
var per = 1;

var slide1 = document.querySelector(".slide1");
var slide2 = document.querySelector(".slide2");
var slide3 = document.querySelector(".slide3");

for (let i = 0; i < slideRadio.length; i++) {
    slideRadio[i].addEventListener("click", function (evt) {
    	per = this.value;
		if (per == 1) {
			if(!slide1.classList.contains("slide-show")){
			slide1.classList.add("slide-show");
			}

			if(slide2.classList.contains("slide-show")){
				slide2.classList.remove("slide-show");
			}

			if(slide3.classList.contains("slide-show")){
				slide3.classList.remove("slide-show");
			}
		}

		if (per == 2) {
			if(!slide2.classList.contains("slide-show")){
				slide2.classList.add("slide-show");
			}

			if(slide1.classList.contains("slide-show")){
				slide1.classList.remove("slide-show");
			}

			if(slide3.classList.contains("slide-show")){
				slide3.classList.remove("slide-show");
			}
		}

		if (per == 3) {
			if(!slide3.classList.contains("slide-show")){
				slide3.classList.add("slide-show");
			}

			if(slide1.classList.contains("slide-show")){
				slide1.classList.remove("slide-show");
			}

			if(slide2.classList.contains("slide-show")){
				slide2.classList.remove("slide-show");
			}
		}
    });
}