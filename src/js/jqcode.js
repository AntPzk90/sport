var $page = $('html, body');
$('.header__list-link').click(function() {
    console.log($($.attr(this, 'href')));
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;  
});
$(".up-btn__link").click(function(){
    $page.animate({
        scrollTop: $("#body").offset().top
    }, 400);
});
var container = $(".container").width();
    if(container<= 1050){
        $('a[href*="#"]').click(function() {
            $(".header__mobile-btn").removeClass("header__mobile-btn--close");
            $(".header__navigation").removeClass("header__navigation-list--on");
            $(".header__navigation").addClass("header__navigation-list--off");
        });
}

