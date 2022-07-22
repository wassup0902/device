var slideRadio = document.querySelectorAll("input[name='slider-radio']");
var per = 1;

var slide1 = document.querySelector(".slider__item:nth-child(1)");
var slide2 = document.querySelector(".slider__item:nth-child(2)");
var slide3 = document.querySelector(".slider__item:nth-child(3)");

for (let i = 0; i < slideRadio.length; i++) {
    slideRadio[i].addEventListener("click", function (evt) {
    	per = this.value;
		if (per == 1) {
			if(!slide1.classList.contains("slider__item_show")){
			slide1.classList.add("slider__item_show");
			}

			if(slide2.classList.contains("slider__item_show")){
				slide2.classList.remove("slider__item_show");
			}

			if(slide3.classList.contains("slider__item_show")){
				slide3.classList.remove("slider__item_show");
			}
		}

		if (per == 2) {
			if(!slide2.classList.contains("slider__item_show")){
				slide2.classList.add("slider__item_show");
			}

			if(slide1.classList.contains("slider__item_show")){
				slide1.classList.remove("slider__item_show");
			}

			if(slide3.classList.contains("slider__item_show")){
				slide3.classList.remove("slider__item_show");
			}
		}

		if (per == 3) {
			if(!slide3.classList.contains("slider__item_show")){
				slide3.classList.add("slider__item_show");
			}

			if(slide1.classList.contains("slider__item_show")){
				slide1.classList.remove("slider__item_show");
			}

			if(slide2.classList.contains("slider__item_show")){
				slide2.classList.remove("slider__item_show");
			}
		}
    });
}
