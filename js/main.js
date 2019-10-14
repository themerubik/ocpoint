$(function($){
    "use strict"

   /* Offset start */
	var html_body = $('html, body'),
		nav = $('nav'),
		navOffset = nav.offset().top,
		$window = $(window);
	/* offset ends */

	$('nav a').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				html_body.animate({
					scrollTop: target.offset().top - 30
				}, 1500);
				return false;
			}
		}
	});
	//navbar fixed js here   
	$window.on('scroll', function () {

		var scrollPos = $window.scrollTop();

		if (scrollPos > navOffset) {
			$('nav').addClass('navbar-fixed');
		} else {
			$('nav').removeClass('navbar-fixed');
		}

	});
   //scrollspy menu
	$('body').scrollspy({
		target: '#navbarSupportedContent',
		offset: 80
	});
    
    
    
    
    //testimonial js
    $('.custom1').owlCarousel({
        animateIn: 'bounceIn',
        items: 1,
        margin: 30,
        stagePadding: 30,
        smartSpeed: 450,
        speed:1000,
        autoplay:true,
        loop:true,
        singleItem:true
    });
    
    //service_slider js
    $('.slider').slick();
    
    $('.service_slider').slick({
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      arrows:false,
      dot:false,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
              dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
              dots: false
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    
    
    //team_slider js
    $('.team_slider').slick({
      
      slidesToShow: 4,
      slidesToScroll: 1,
        autoplay:true,
        arrows:false,
        dot:false,
        speed:1000,
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    
    
    //partner_slider js
    $('.partner_slider').slick({
      
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay:true,
        dots: false,
        arrows: false,
        speed:1000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    
    
    //video js
    jQuery("a.bla-1").YouTubePopUp();
    jQuery("a.bla-2").YouTubePopUp( { autoplay: 0 } ); // Disable autoplay

    
    //isotop js
    var portfolioitems = $(".main-iso");
    var portfoliofilterli = $(".iso-nav li a");

    portfolioitems.isotope({
        itemSelector: '.iso-item',
        layoutMode: 'fitRows',
    });

    portfoliofilterli.on('click', function () {
        portfoliofilterli.removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr('data-filter');
        portfolioitems.isotope({
            filter: selector,
            animation0ptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });
    
    //progressbar js
    $('.acc-btn').click(function () {
        if ($(this).next().is(":hidden")) {
            $('.acc-content').slideUp('selected');
            $(this).next().slideDown('selected');
        } else {
            $(this).next().slideUp('selected');
        };
    });
    
    //counter js
    $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
    
    //for scroll bottom to top js here
	if ($('#back-to-top').length) {
	    var scrollTrigger = 100, // px
	        backToTop = function () {
	            var scrollTop = $(window).scrollTop();
	            if (scrollTop > scrollTrigger) {
	                $('#back-to-top').addClass('show');
	            } else {
	                $('#back-to-top').removeClass('show');
	            }
	        };
	    backToTop();
	    $(window).on('scroll', function () {
	        backToTop();
	    });
	    $('#back-to-top').on('click', function (e) {
	        e.preventDefault();
	        $('html,body').animate({
	            scrollTop: 0
	        }, 700);
	    });
	} 
    
    //LineProgressbar//        
    $('#pgb-1').LineProgressbar({
    percentage: 70,
     });
    $('#pgb-2').LineProgressbar({
    percentage: 50,
     });
    $('#pgb-3').LineProgressbar({
    percentage: 80,
     });
    $('#pgb-4').LineProgressbar({
    percentage: 90,
     });    
    
	
    
    
});


