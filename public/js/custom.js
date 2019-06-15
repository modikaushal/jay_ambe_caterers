/***************************************************************************************************************
||||||||||||||||||||||||||||        CUSTOM SCRIPT FOR ASSURANCE            |||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
||||||||||||||||||||||||||||              TABLE OF CONTENT                  ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
****************************************************************************************************************
01. Sticky header
02. mainmenu
03. Revolution slider 
04. scoll to Top
05. Testimonial Slider
06. Clients Slider
07. Sponser Slider
08. Search Box
09. Accordion
10. Fact counter 
10. ThmScrollAnim
11. Offset Gap 
12. ContactFormValidation


****************************************************************************************************************
||||||||||||||||||||||||||||            End TABLE OF CONTENT                ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************/
(function($) {
    "use strict";
        
/*=================== Sticky Header ===================*/
    function stickyHeader() {
        if($('.mainmenu-area.stick').length){
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.mainmenu-area.stick');
            var sticky_header = $('.sticky-header');
            var scrollLink = $('.scroll-to-top');
            if (windowpos > 250) {
                siteHeader.addClass('sticky');
                sticky_header.addClass("animated slideInDown");
                scrollLink.fadeIn(300);
            } else {
                siteHeader.removeClass('sticky');
                sticky_header.removeClass("animated slideInDown");
                scrollLink.fadeOut(300);
            }
        }
    }

//====Main menu===
    function mainmenu() {
        //Submenu Dropdown Toggle
        if($('.main-menu li.dropdown ul').length){
            $('.main-menu li.dropdown').append('<div class="dropdown-btn"></div>');
            
            //Dropdown Button
            $('.main-menu li.dropdown .dropdown-btn').on("click", function() {
                $(this).prev('ul').slideToggle(500);
            });
        }

    }

//===RevolutionSliderActiver===
    function revolutionSliderActiver () {
        if ($('.rev_slider_wrapper #slider1').length) {
            $("#slider1").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:5000,
                
                navigationType:"bullet",
                navigationArrows:"0",
                navigationStyle:"preview3",
                
                dottedOverlay:'yes',
                
                hideTimerBar:"off",
                onHoverStop:"off",
                navigation: {
                    arrows:{enable:true}
                }, 
                responsiveLevels:[1920,1280,975,600,300],
                gridwidth: [1170, 720, 500, 500, 300],
                gridheight: [650, 600, 550, 450, 400]
            });
        };
    }



//===scoll to Top===
    function scrollToTop() {
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on("click", function() {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);

            });
        }
    }

//===Testmonial Slider===
    function testmonialcarousel () {
        $('.testmonial-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            dots: true,
            autoplayHoverPause:true,
            autoplay: 6000,
            smartSpeed: 700,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1100:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        })
    }

//===Gallery Slider===
    function gallerycarousel () {
        $('.gallery-carousel').owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            dots: false,
            autoplayHoverPause:true,
            autoplay: 6000,
            smartSpeed: 700,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                800:{
                    items:4
                },
                1024:{
                    items:5
                },
                1100:{
                    items:6
                },
                1200:{
                    items:6
                }
            }
        })
    }

//=== Thm scroll anim===
    function thmScrollAnim() {
        if ($('.wow').length) {
            var wow = new WOW({
                mobile: false
            });
            wow.init();
        };
    }

// ===Project===
    function projectMasonaryLayout() {

        if ($('.post-filter').length) {
            $('.post-filter li').children('span').on("click", function() {
                var Self = $(this);
                var selector = Self.parent().attr('data-filter');
                $('.post-filter li').children('span').parent().removeClass('active');
                Self.parent().addClass('active');


                $('.filter-layout').isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 500,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
        }

        if ($('.post-filter.has-dynamic-filter-counter').length) {
            // var allItem = $('.single-filter-item').length;

            var activeFilterItem = $('.post-filter.has-dynamic-filter-counter').find('li');

            activeFilterItem.each(function() {
                var filterElement = $(this).data('filter');
                console.log(filterElement);
                var count = $('.gallery-content').find(filterElement).length;

                $(this).children('span').append('<span class="count"><b>' + count + '</b></span>');
            });
        };
    }

    function datepicker() {
        $( "#datepicker" ).datepicker();
    }

//=== Contact Form Validation ===
    function ContactFormValidation() {
      if(('.form-sec').length) {
            var form = $('#ajax-contact');
            var formMessages = $('.form-messages');
            $(form).submit(function(e) {
              e.preventDefault();
              var formData = $(form).serialize();
              $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
              }).done(function(response) {
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');
                $(formMessages).text(response);
                $(this).find("input").val("");
                $(form).trigger("reset");
              }).fail(function(data) {
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');
                if (data.responseText !== '') {
                  $(formMessages).text(data.responseText);
                } else {
                  $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
              });
            });
        }
    }

        

/* ==========================================================================
   When document is loading, do
   ========================================================================== */
    
    $(window).on('load', function() {
        mainmenu();
        revolutionSliderActiver();
        scrollToTop();
        testmonialcarousel();
        gallerycarousel();
        thmScrollAnim();
        projectMasonaryLayout();
        ContactFormValidation();
        datepicker();
    });
/* ==========================================================================
   When document is Scrolling, do
   ========================================================================== */

$(window).on('scroll', function() {
        stickyHeader();
    });

})(window.jQuery);