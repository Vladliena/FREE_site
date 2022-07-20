$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        autoplay: true,
        items:1,
        autoplaySpeed: 1600,
        loop:true,
        margin:0,
        nav:false,
        dots:false,
        navText: [ '', ' ' ],
    });
});

$(".hover").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
);