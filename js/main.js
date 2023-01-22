
const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
});

$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.slider__btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
})