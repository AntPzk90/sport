var bg = document.querySelector(".start-screen");
var header = document.querySelector(".header");
var aboutBlock = document.querySelector(".about-us");
var advantages = document.querySelector(".advantages");
var catalogItem = document.querySelector(".catalog-list__item");
var catalogItemsAll = document.querySelectorAll(".catalog-list__item");
var catalogItemsImgsAll = document.querySelectorAll(".catalog-list__img");
var mobileBtn = document.querySelector(".header__mobile-btn");
var byuBtn = document.querySelector(".buy-btn");
var nav = document.querySelector(".header__navigation-list");
var navList = document.querySelector(".header__navigation");
var buyBtns = document.querySelectorAll(".buy-btn");
var popup = document.querySelector(".popup-feedback");
var popupForm = document.querySelector(".popup__form");
var body = document.querySelector("body");
var upBtn = document.querySelector(".up-btn");
//нажатие на кнопку появления попапа
var buyBtnsClickHendler = function(item){
     item.addEventListener("click",function(evt){
          evt.preventDefault();
          var popupOverlay = document.createElement("div");
          popupOverlay.classList = "popup-feedback popup-feedback--on";
          document.body.appendChild(popupOverlay);
          body.style.overflow = "hidden";
          popupForm.classList.add("feedback__form--on");
          var popupBtnClose = popupForm.querySelector(".popup-feedback__btn-close");
          popupBtnClose.addEventListener("click",function(evt){
               evt.preventDefault();
               popupOverlay.remove();
               popupForm.classList.remove("feedback__form--on");
               body.removeAttribute("style");
          });
          popupOverlay.addEventListener("click", function(evt){
               evt.preventDefault();
               console.log(evt)
               popupOverlay.remove();
               body.removeAttribute("style");
               popupForm.classList.remove("feedback__form--on");
          });
     });
}
for(var j = 0; j < buyBtns.length; j++){
     buyBtnsClickHendler(buyBtns[j]);
}
var overHendler = function(item){
     item.addEventListener("mouseover", function(evt){
          evt.preventDefault();
          this.classList.add("catalog-list__item--shadow");
          var subCatalog = this.querySelector(".catalog-list__sub-list");
          subCatalog.classList.add("catalog-list__item--active");
     });
     item.addEventListener("mouseout", function(evt){
          evt.preventDefault();
          this.classList.remove("catalog-list__item--shadow");
          var subCatalog = this.querySelector(".catalog-list__sub-list");
          subCatalog.classList.remove("catalog-list__item--active");
     });
}
for (var k = 0; k < catalogItemsAll.length; k++) {
     overHendler(catalogItemsAll[k]);
}
var touchHendler = function(item){
     item.addEventListener("touchend",function(evt){
          evt.preventDefault();
          this.parentElement.classList.toggle("catalog-list__item--shadow");
          var subCatalog = this.parentElement.querySelector(".catalog-list__sub-list");
          subCatalog.classList.add("catalog-list__item--active");
          subCatalog.addEventListener("touchend", function(evt){
               evt.preventDefault();
               subCatalog.classList.remove("catalog-list__item--active");
               this.parentElement.classList.toggle("catalog-list__item--shadow");
          });
     });
}
for (var i = 0; i < catalogItemsImgsAll.length; i++) {
     touchHendler(catalogItemsImgsAll[i]);
}
mobileBtn.addEventListener("click",function(evt){
    evt.preventDefault();
    this.classList.toggle("header__mobile-btn--close")
    if(this.classList.contains("header__mobile-btn--close")){
          header.classList.add("header--fixed-tab");
          nav.style.display = "flex";
          navList.classList.remove("header__navigation-list--off");
          navList.classList.add("header__navigation-list--on");
    }else{
          this.classList.add("header__mobile--close");
          header.classList.remove("header--fixed-tab");
          nav.removeAttribute("style");
          navList.classList.remove("header__navigation-list--on");
          navList.classList.add("header__navigation-list--off");
    }
});
var scrolling = window.scrollY;
if(scrolling > 0){
     header.classList.add("header--fixed");
}

window.addEventListener("scroll", function(evt){
     var scrolling = window.scrollY;
     if(scrolling > 150){
          header.classList.add("header--fixed");
          if(scrolling > 800){
               upBtn.classList.add("up-btn--on");
          }
     }else{
          header.classList.remove("header--fixed");
          upBtn.classList.remove("up-btn--on")
     }
     bg.style.backgroundPosition = "50% " + scrolling/5 + "px";
     var h = advantages.getBoundingClientRect();
     if(h.top < 1000){
         scrolling = Math.abs(h.top);
         advantages.style.backgroundPositionY = 100 + scrolling/4 + "px";
     }
});

var scrollPos = 0;
window.addEventListener("scroll", function(){
   var st = window.scrollY;
   if (st > scrollPos){
        //console.log("up")
   } else {
        //console.log("down")
   }
   scrollPos = st;
});


// // header animate
// ScrollReveal().reveal(".header__logo",{delay: 200,duration: 200,distance:"50px",reset: true});
// ScrollReveal().reveal(".header__main-nav",{delay: 200,duration: 200,distance:"50px",reset: true});
// ScrollReveal().reveal(".header__user-wrapper",{delay: 200,duration: 200,distance:"50px",reset: true});
// ScrollReveal().reveal(".header__delivery",{delay: 200,duration: 200,distance:"50px",reset: true});
// ScrollReveal().reveal(".header__more-list",{delay: 200,duration: 200,distance:"50px",reset: true});
// ScrollReveal().reveal(".represent__list",{delay: 375,duration: 400,distance:"50px",reset: true});
// //index animate
// //ScrollReveal().reveal(".week-product__title-wrapper",{delay: 550,duration: 550,reset: true});
// ScrollReveal().reveal(".week-product__dscr",{delay: 300,duration: 300,distance:"50px",reset: true});
// ScrollReveal().reveal(".week-prouct__data",{delay: 300,duration: 300,distance:"50px",reset: true});
// ScrollReveal().reveal(".week-product__price-wrapper",{delay: 300,duration: 300,distance:"50px",reset: true});
// ScrollReveal().reveal(".week-product__img-wrapper",{delay: 300,duration: 300,distance:"50px",reset: true});
// ScrollReveal().reveal(".about-us__list-item",{delay: 300,duration: 300,distance:"50px",reset: true});
// ScrollReveal().reveal(".reviews__txt",{delay: 300,duration: 300,distance:"50px",reset: true});
// ScrollReveal().reveal(".reviews__author-wrapper",{delay: 300,duration: 300,distance:"50px",reset: true});
// ScrollReveal().reveal(".reviews__arrow-wrapper",{delay: 300,duration: 300,distance:"50px",reset: true});
// ScrollReveal().reveal(".reviews__btn",{delay: 300,duration: 300,distance:"50px",reset: true});
// ScrollReveal().reveal(".contacts__data-table",{delay: 300,duration: 300,distance:"50px",reset: true});
// ScrollReveal().reveal(".contacts__btn",{delay: 300,duration: 300,distance:"50px",reset: true});
// ScrollReveal().reveal(".contacts__map",{delay: 300,duration: 300,distance:"50px",reset: true});
// //catalog animate
// ScrollReveal().reveal(".catalogs-items__list-item:nth-child(1)",{delay: 300,duration: 300,distance:"50px",reset: true});
// ScrollReveal().reveal(".catalogs-items__list-item:nth-child(2)",{delay: 350,duration: 350,distance:"50px",reset: true});
// ScrollReveal().reveal(".catalogs-items__list-item:nth-child(3)",{delay: 400,duration: 400,distance:"50px",reset: true});
// ScrollReveal().reveal(".catalog-video__video-wrapper",{delay: 300,duration: 300,distance:"50px",reset: true});
// ScrollReveal().reveal(".catalog-video__txt",{delay: 300,duration: 300,distance:"50px",reset: true});
// ScrollReveal().reveal(".catalog-video__btn",{delay: 300,duration: 300,distance:"50px",reset: true});
// //form animate
// ScrollReveal().reveal(".form__radio-wrapper",{delay: 300,duration: 300,distance:"50px",reset: true});
// ScrollReveal().reveal(".form__checkbox-wrapper",{delay: 300,duration: 300,distance:"50px",reset: true});
// ScrollReveal().reveal(".form__text-name-wrapper",{delay: 300,duration: 300,distance:"50px",reset: true});
// ScrollReveal().reveal(".form__fieldset-tel-wrapper",{delay: 300,duration: 300,distance:"50px",reset: true});
// ScrollReveal().reveal(".form__fieldset-email-wrapper",{delay: 300,duration: 300,distance:"50px",reset: true});
// ScrollReveal().reveal(".form__fieldset-dop-wrapper",{delay: 300,duration: 300,distance:"50px",reset: true});
// ScrollReveal().reveal(".form__btn-wrapper",{delay: 300,duration: 300,distance:"50px",reset: true});
// ScrollReveal().reveal(".legend",{delay: 300,duration: 300,distance:"50px",reset: true});
// ScrollReveal().reveal(".form__slogan",{delay: 300,duration: 300,distance:"50px",reset: true});
// //footer animate
// ScrollReveal().reveal(".footer__logo",{delay: 300,duration: 300,distance:"50px",reset: true});
// ScrollReveal().reveal(".fooetr__social-list",{delay: 300,duration: 300,distance:"50px",reset: true});
// ScrollReveal().reveal(".footer__developed-by",{delay: 300,duration: 300,distance:"50px",reset: true});
                            