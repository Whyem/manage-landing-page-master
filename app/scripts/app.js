$(document).ready(function(){
    new Splide( '.splide', {
        type   : 'loop',
        perPage: 3,
        perMove: 1,
        autoWidth: true,
        focus: 'center',
        autoplay: true,
    } ).mount();

    $(".hamburger").click(function(){
        $(this).toggleClass("closed");
        $(".overlay").toggleClass("fade-in");
        $(".header__links__mobile").toggleClass("fade-in clickable");
        $("body").toggleClass("noscroll");
    });
});