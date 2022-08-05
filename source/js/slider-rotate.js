var slideRadio = document.querySelectorAll("input[name='slider-radio']");
var per = 1;

var slide1 = document.querySelector(".slider__item:nth-child(1)");
var slide2 = document.querySelector(".slider__item:nth-child(2)");
var slide3 = document.querySelector(".slider__item:nth-child(3)");

var popupWrite = document.querySelector(".modal-writeus");
var popup = document.querySelector(".modal-map");

for (let i = 0; i < slideRadio.length; i++) {
    slideRadio[i].addEventListener("click", function (evt) {
    	per = this.value;
      if(per >= 1 && per <= 3){
        if(popup.classList.contains("modal-map_show")){
          popup.classList.remove("modal-map_show");
        }
        if(popupWrite.classList.contains("modal-writeus_show")){
          popupWrite.classList.remove("modal-writeus_show");
        }
      }

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
