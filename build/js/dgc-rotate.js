var delivery=document.querySelector(".js-delivery"),guarantee=document.querySelector(".js-guarantee"),credit=document.querySelector(".js-credit"),dgc1=document.querySelector(".dgc-list__item:nth-child(1)"),dgc2=document.querySelector(".dgc-list__item:nth-child(2)"),dgc3=document.querySelector(".dgc-list__item:nth-child(3)");delivery.addEventListener("click",(function(i){i.preventDefault(),dgc2.classList.contains("dgc-list__item_show")&&dgc2.classList.remove("dgc-list__item_show"),dgc3.classList.contains("dgc-list__item_show")&&dgc3.classList.remove("dgc-list__item_show"),dgc1.classList.contains("dgc-list__item_show")||dgc1.classList.add("dgc-list__item_show"),guarantee.classList.contains("dgc-navigation__link_current")&&guarantee.classList.remove("dgc-navigation__link_current"),credit.classList.contains("dgc-navigation__link_current")&&credit.classList.remove("dgc-navigation__link_current"),delivery.classList.contains("dgc-navigation__link_current")||delivery.classList.add("dgc-navigation__link_current")})),guarantee.addEventListener("click",(function(i){i.preventDefault(),dgc1.classList.contains("dgc-list__item_show")&&dgc1.classList.remove("dgc-list__item_show"),dgc3.classList.contains("dgc-list__item_show")&&dgc3.classList.remove("dgc-list__item_show"),dgc2.classList.contains("dgc-list__item_show")||dgc2.classList.add("dgc-list__item_show"),credit.classList.contains("dgc-navigation__link_current")&&credit.classList.remove("dgc-navigation__link_current"),delivery.classList.contains("dgc-navigation__link_current")&&delivery.classList.remove("dgc-navigation__link_current"),guarantee.classList.contains("dgc-navigation__link_current")||guarantee.classList.add("dgc-navigation__link_current")})),credit.addEventListener("click",(function(i){i.preventDefault(),dgc1.classList.contains("dgc-list__item_show")&&dgc1.classList.remove("dgc-list__item_show"),dgc2.classList.contains("dgc-list__item_show")&&dgc2.classList.remove("dgc-list__item_show"),dgc3.classList.contains("dgc-list__item_show")||dgc3.classList.add("dgc-list__item_show"),delivery.classList.contains("dgc-navigation__link_current")&&delivery.classList.remove("dgc-navigation__link_current"),guarantee.classList.contains("dgc-navigation__link_current")&&guarantee.classList.remove("dgc-navigation__link_current"),credit.classList.contains("dgc-navigation__link_current")||credit.classList.add("dgc-navigation__link_current")})),delivery.onfocus=function(i){i.preventDefault(),dgc2.classList.contains("dgc-list__item_show")&&dgc2.classList.remove("dgc-list__item_show"),dgc3.classList.contains("dgc-list__item_show")&&dgc3.classList.remove("dgc-list__item_show"),dgc1.classList.contains("dgc-list__item_show")||dgc1.classList.add("dgc-list__item_show"),guarantee.classList.contains("dgc-navigation__link_current")&&guarantee.classList.remove("dgc-navigation__link_current"),credit.classList.contains("dgc-navigation__link_current")&&credit.classList.remove("dgc-navigation__link_current"),delivery.classList.contains("dgc-navigation__link_current")||delivery.classList.add("dgc-navigation__link_current")},guarantee.onfocus=function(i){i.preventDefault(),dgc1.classList.contains("dgc-list__item_show")&&dgc1.classList.remove("dgc-list__item_show"),dgc3.classList.contains("dgc-list__item_show")&&dgc3.classList.remove("dgc-list__item_show"),dgc2.classList.contains("dgc-list__item_show")||dgc2.classList.add("dgc-list__item_show"),credit.classList.contains("dgc-navigation__link_current")&&credit.classList.remove("dgc-navigation__link_current"),delivery.classList.contains("dgc-navigation__link_current")&&delivery.classList.remove("dgc-navigation__link_current"),guarantee.classList.contains("dgc-navigation__link_current")||guarantee.classList.add("dgc-navigation__link_current")},credit.onfocus=function(i){i.preventDefault(),dgc1.classList.contains("dgc-list__item_show")&&dgc1.classList.remove("dgc-list__item_show"),dgc2.classList.contains("dgc-list__item_show")&&dgc2.classList.remove("dgc-list__item_show"),dgc3.classList.contains("dgc-list__item_show")||dgc3.classList.add("dgc-list__item_show"),delivery.classList.contains("dgc-navigation__link_current")&&delivery.classList.remove("dgc-navigation__link_current"),guarantee.classList.contains("dgc-navigation__link_current")&&guarantee.classList.remove("dgc-navigation__link_current"),credit.classList.contains("dgc-navigation__link_current")||credit.classList.add("dgc-navigation__link_current")};