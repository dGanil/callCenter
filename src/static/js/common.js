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

    $(window).bind('scroll', function() {
        if ($(document).scrollTop() > ($('header').height() + 50)) {
            $('header').addClass('scroll-a')

        } else if ($(document).scrollTop() < ($('header').height() + 50)) {
            $('header').removeClass('scroll-a')
        }

    })

    $('.navbar-toggler').bind('click', function() {
        $('.navbar-collapse').toggleClass('show')
    }) 

    $('.nav-item').bind('click', function() {
        $('.navbar-collapse').removeClass('show')
    })


})