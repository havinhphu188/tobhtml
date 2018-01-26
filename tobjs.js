$(document).ready(function(){
    $('#div_main-col').on('scroll', function () {
        $('#div_left-side').scrollTop($(this).scrollTop());
        $('#div_title-scroll-frame').scrollLeft($(this).scrollLeft());
    });
});