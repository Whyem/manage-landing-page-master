$(document).ready(function(){
    new Splide( '.splide', {
        type   : 'loop',
        perPage: 3,
        perMove: 1,
        autoWidth: true,
        focus: 'center',
        autoplay: true,
    } ).mount();
});