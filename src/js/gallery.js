'use strict';

// var myInterval = setInterval(function() {
//     console.log(new Date());
// }, 1000)

$(function(){
    //configuration
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //cahce dome
    var $slider = $('.slider');
    var $slideContainer = $slider.find('.slides');
    var $slides = $slideContainer.find('.slide');

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

    startSlider();
});