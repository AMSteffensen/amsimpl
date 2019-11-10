'use strict';

$(function(){
    //configuration
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //cahce dome
    var $slider = $('.amslider');
    var $slideContainer = $slider.find('.amslides');
    var $slides = $slideContainer.find('.amslide');

    var interval;
    
    function startSlider(){
        setInterval(function () {
            interval = $slideContainer.animate({
                'margin-left': '-=' + width
            }, animationSpeed, function () {
                currentSlide++;
                if (currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0)
                }
            })
        }, pause);
    }
    
    function stopSlider() {
        clearInterval(interval);
        console.log('hello');
    }

    $slider.on('mouse-enter', stopSlider).on('mouse-leave', startSlider)
});