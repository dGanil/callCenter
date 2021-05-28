$(document).ready(function() {
    // var swiper = new Swiper('.swiper-container', {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //     navigation: {
    //      nextEl: '.arrow-next',
    //      prevEl: '.arrow-prev'
    //  }
    //   })

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
})