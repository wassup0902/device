var mapWrite=document.querySelector(".js-writeus"),popupWrite=document.querySelector(".modal-writeus"),popup=document.querySelector(".modal-map"),close=popupWrite.querySelector(".modal-close");mapWrite.addEventListener("click",(function(e){e.preventDefault(),popup.classList.contains("modal-map_show")&&popup.classList.remove("modal-map_show"),popupWrite.classList.contains("modal-writeus_show")||popupWrite.classList.add("modal-writeus_show")})),close.addEventListener("click",(function(e){e.preventDefault(),popupWrite.classList.contains("modal-writeus_show")&&popupWrite.classList.remove("modal-writeus_show")})),window.addEventListener("keydown",(function(e){27===e.keyCode&&(e.preventDefault(),popupWrite.classList.contains("modal-writeus_show")&&popupWrite.classList.remove("modal-writeus_show"))}));