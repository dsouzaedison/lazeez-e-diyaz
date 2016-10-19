/**
 * Created by Edison D'souza on 09-10-2016.
 */

$(function () {
//PARALLAX
    if ($(window).outerWidth() > 768)
        $(window).on('scroll', function () {
            setTimeout(function(){
                $('.parallax1').css('backgroundPositionY', (Number($(window).scrollTop() * 0.05) + '%') );
                $('.parallax2').css('backgroundPositionY', (Number($(window).scrollTop() * 0.05) + '%') );
            }, 100);


        });


});