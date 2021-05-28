$(document).ready(function() {
    if ($(window).width() <= 1400 && $(window).width() > 991) {
        var swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.arrow-next',
                prevEl: '.arrow-prev',
            },
            slidesPerView: 2,
            spaceBetween: 41,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
        });
    } else if ($(window).width() > 1400) {
        var swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.arrow-next',
                prevEl: '.arrow-prev',
            },
            slidesPerView: 3,
            spaceBetween: 41,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
        });
    } else if ($(window).width() <= 991) {
        var swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.arrow-next',
                prevEl: '.arrow-prev',
            },
            slidesPerView: 1,
            spaceBetween: 41,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
        });
    }


})