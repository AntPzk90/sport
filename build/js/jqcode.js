var e=$("html, body");$(".header__list-link").click(function(){return console.log($($.attr(this,"href"))),e.animate({scrollTop:$($.attr(this,"href")).offset().top},400),!1}),$(".up-btn__link").click(function(){e.animate({scrollTop:$("#body").offset().top},400)}),$(".container").width()<=1050&&$(".header__list-link").click(function(){$(".header__mobile-btn").removeClass("header__mobile-btn--close"),$(".header__navigation").removeClass("header__navigation-list--on"),$(".header__navigation").addClass("header__navigation-list--off")});