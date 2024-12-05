$(document).ready(function() {
    $('.slider-nav').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: false,
                    centerPadding: '20px',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
});

$(document).ready(function() {
    // $(".dropdownmenu_click").hide();
    $(".menu-icon").click(function() {
        $(".menu-icon").toggleClass("active");
        $(".menu").toggleClass("active");
    });
    /* $(".menu ul li").click(function () {
         $(".menu-icon").toggleClass("active");
         $(".menu").toggleClass("active");
     });*/
    $(".menu-click").click(function() {
        $(".menu-icon").toggleClass("active");
        $(".menu").toggleClass("active");
    });
    $(".dropdown").click(function() {
        $(".menu").addClass("active");
        $(".menu-icon").addClass("active");
        //  $(".dropdown-menu").toggleClass("show");
        // $(".dropdown-menu").toggleClass('dropdownmenu_click');

    });
});

$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('header').addClass('black');
    } else {
        $('header').removeClass('black');
    }
})