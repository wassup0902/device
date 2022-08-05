var delivery = document.querySelector(".js-delivery");
var guarantee = document.querySelector(".js-guarantee");
var credit = document.querySelector(".js-credit");
var popupWrite = document.querySelector(".modal-writeus");
var popup = document.querySelector(".modal-map");

var dgc1 = document.querySelector(".dgc-list__item:nth-child(1)");
var dgc2 = document.querySelector(".dgc-list__item:nth-child(2)");
var dgc3 = document.querySelector(".dgc-list__item:nth-child(3)");

delivery.addEventListener("click", function (evt) {
  evt.preventDefault();
  if(popup.classList.contains("modal-map_show")){
    popup.classList.remove("modal-map_show");
  }
  if(popupWrite.classList.contains("modal-writeus_show")){
    popupWrite.classList.remove("modal-writeus_show");
  }

  if(dgc2.classList.contains("dgc-list__item_show")){
    dgc2.classList.remove("dgc-list__item_show");
  }
  if(dgc3.classList.contains("dgc-list__item_show")){
    dgc3.classList.remove("dgc-list__item_show");
  }
  if(!dgc1.classList.contains("dgc-list__item_show")){
    dgc1.classList.add("dgc-list__item_show");
  }
  if(guarantee.classList.contains("dgc-navigation__link_current")){
    guarantee.classList.remove("dgc-navigation__link_current");
  }
  if(credit.classList.contains("dgc-navigation__link_current")){
    credit.classList.remove("dgc-navigation__link_current");
  }
  if(!delivery.classList.contains("dgc-navigation__link_current")){
    delivery.classList.add("dgc-navigation__link_current");
  }
});

guarantee.addEventListener("click", function (evt) {
  evt.preventDefault();
  if(popup.classList.contains("modal-map_show")){
    popup.classList.remove("modal-map_show");
  }
  if(popupWrite.classList.contains("modal-writeus_show")){
    popupWrite.classList.remove("modal-writeus_show");
  }

  if(dgc1.classList.contains("dgc-list__item_show")){
    dgc1.classList.remove("dgc-list__item_show");
  }
  if(dgc3.classList.contains("dgc-list__item_show")){
    dgc3.classList.remove("dgc-list__item_show");
  }
  if(!dgc2.classList.contains("dgc-list__item_show")){
    dgc2.classList.add("dgc-list__item_show");
  }
  if(credit.classList.contains("dgc-navigation__link_current")){
    credit.classList.remove("dgc-navigation__link_current");
  }
  if(delivery.classList.contains("dgc-navigation__link_current")){
    delivery.classList.remove("dgc-navigation__link_current");
  }
  if(!guarantee.classList.contains("dgc-navigation__link_current")){
    guarantee.classList.add("dgc-navigation__link_current");
  }
});

credit.addEventListener("click", function (evt) {
  evt.preventDefault();
  if(popup.classList.contains("modal-map_show")){
    popup.classList.remove("modal-map_show");
  }
  if(popupWrite.classList.contains("modal-writeus_show")){
    popupWrite.classList.remove("modal-writeus_show");
  }

  if(dgc1.classList.contains("dgc-list__item_show")){
    dgc1.classList.remove("dgc-list__item_show");
  }
  if(dgc2.classList.contains("dgc-list__item_show")){
    dgc2.classList.remove("dgc-list__item_show");
  }
  if(!dgc3.classList.contains("dgc-list__item_show")){
    dgc3.classList.add("dgc-list__item_show");
  }
  if(delivery.classList.contains("dgc-navigation__link_current")){
    delivery.classList.remove("dgc-navigation__link_current");
  }
  if(guarantee.classList.contains("dgc-navigation__link_current")){
    guarantee.classList.remove("dgc-navigation__link_current");
  }
  if(!credit.classList.contains("dgc-navigation__link_current")){
    credit.classList.add("dgc-navigation__link_current");
  }
});

delivery.onfocus = function (evt) {
  evt.preventDefault();
  if(dgc2.classList.contains("dgc-list__item_show")){
    dgc2.classList.remove("dgc-list__item_show");
  }
  if(dgc3.classList.contains("dgc-list__item_show")){
    dgc3.classList.remove("dgc-list__item_show");
  }
  if(!dgc1.classList.contains("dgc-list__item_show")){
    dgc1.classList.add("dgc-list__item_show");
  }
  if(guarantee.classList.contains("dgc-navigation__link_current")){
    guarantee.classList.remove("dgc-navigation__link_current");
  }
  if(credit.classList.contains("dgc-navigation__link_current")){
    credit.classList.remove("dgc-navigation__link_current");
  }
  if(!delivery.classList.contains("dgc-navigation__link_current")){
    delivery.classList.add("dgc-navigation__link_current");
  }
};

guarantee.onfocus = function (evt) {
  evt.preventDefault();
  if(dgc1.classList.contains("dgc-list__item_show")){
    dgc1.classList.remove("dgc-list__item_show");
  }
  if(dgc3.classList.contains("dgc-list__item_show")){
    dgc3.classList.remove("dgc-list__item_show");
  }
  if(!dgc2.classList.contains("dgc-list__item_show")){
    dgc2.classList.add("dgc-list__item_show");
  }
  if(credit.classList.contains("dgc-navigation__link_current")){
    credit.classList.remove("dgc-navigation__link_current");
  }
  if(delivery.classList.contains("dgc-navigation__link_current")){
    delivery.classList.remove("dgc-navigation__link_current");
  }
  if(!guarantee.classList.contains("dgc-navigation__link_current")){
    guarantee.classList.add("dgc-navigation__link_current");
  }
};

credit.onfocus = function (evt) {
  evt.preventDefault();
  if(dgc1.classList.contains("dgc-list__item_show")){
    dgc1.classList.remove("dgc-list__item_show");
  }
  if(dgc2.classList.contains("dgc-list__item_show")){
    dgc2.classList.remove("dgc-list__item_show");
  }
  if(!dgc3.classList.contains("dgc-list__item_show")){
    dgc3.classList.add("dgc-list__item_show");
  }
  if(delivery.classList.contains("dgc-navigation__link_current")){
    delivery.classList.remove("dgc-navigation__link_current");
  }
  if(guarantee.classList.contains("dgc-navigation__link_current")){
    guarantee.classList.remove("dgc-navigation__link_current");
  }
  if(!credit.classList.contains("dgc-navigation__link_current")){
    credit.classList.add("dgc-navigation__link_current");
  }
};
