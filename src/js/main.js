var bg = document.querySelector(".start-screen");
var aboutBlock = document.querySelector(".about-us");
var advantages = document.querySelector(".advantages");
var catalogItem = document.querySelector(".catalog-list__item");
console.log(catalogItem);
catalogItem.addEventListener("mouseover",function(evt){
     this.classList.add("catalog-list__item--active");
});
catalogItem.addEventListener("mouseout",function(evt){
     this.classList.remove("catalog-list__item--active");
});
catalogItem.addEventListener("touchenter",function(evt){
     this.classList.toggle("catalog-list__item--active");
});
// var mobileBtn = document.querySelector(".header__mobile");
// var nav = document.querySelector(".header__main-nav");
// var userWrap = document.querySelector(".header__user-wrapper");
// mobileBtn.addEventListener("click",function(evt){
//     evt.preventDefault();
//     this.classList.toggle("header__mobile--open")
//     if(this.classList.contains("header__mobile--open")){
//         this.classList.remove("header__mobile--close");
//         nav.style.display = "none";
//         userWrap.style.display = "none";
//     }else{
//         this.classList.add("header__mobile--close");
//         nav.removeAttribute("style");
//         userWrap.removeAttribute("style");
//     }
// });
// console.log(mobileBtn.classList.contains("header__mobile--close"));

window.addEventListener("scroll", function(evt){
    var scrolling = window.scrollY;
    bg.style.backgroundPosition = "50% " + scrolling/5 + "px";
    //bg.style.opacity = 1 - (0 + "." + scrolling); 
    //this.console.log(scrolling);
    var h = advantages.getBoundingClientRect();
    this.console.log(h.top)
    if(h.top < 200){
         this.console.log(scrolling);
         advantages.style.backgroundPositionY = 0 + scrolling/7 + "px";
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
                            