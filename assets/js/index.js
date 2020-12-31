$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        // autoWidth:true,
        // nav: true,
        // dots: true,
        dotsEach: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1024: {
                items: 3
            }
        }
    });
});