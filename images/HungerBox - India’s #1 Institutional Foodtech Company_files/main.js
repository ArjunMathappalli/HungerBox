/*
Copyright (c) 2020
[Master Stylesheet]
Version    : 1.0
Author     : HungerBox
Support    : hello@hungerbox.com
*/
/*---------------------------------------------
Table of Contents
-----------------------------------------------
Genaral Styling
Typography
Buttons & Links
Form Styling

*/

$(".navbar-scroll-custom .navbar-brand img").attr("src", "http://dummyimage.com/250x155/");

$(document).ready(function () {
    "use strict";
    var lastScrollTop, navbar, $nav, simpleParallax, back;
    /* Page Pre Loading */
    $(window).load(function () { // makes sure the whole site is loaded
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(250).fadeOut('slow'); // will fade out the white DIV that covers the website.
    });
    /* end Page Pre Loading */
    //Initiat WOW JS
    new WOW().init();
    /*nav bar background color change on scroll */
    $(document).on('scroll', function () {
        $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
    /*navbar reduced height on scroll*/
    lastScrollTop = 0;
    navbar = $('.navbar');
    $(window).on('scroll', function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            navbar.addClass('navbar-scroll-custom');
        }
        else {
            navbar.removeClass('navbar-scroll-custom');
        }
        lastScrollTop = st;
    });
    //Smooth Scroll
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    /* Theme color change*/
    var theme_settings = $(".theme-settings").find(".theme-color");
    theme_settings.on('click', function () {
        var val = $(this).attr('data-color');
        $('#style_theme').attr('href', 'css/' + val + '.css');
        console.log(val);
        theme_settings.removeClass('theme-active');
        theme_settings.addClass('theme-active');
        return false;
    });
    $(".theme-click").on('click', function () {
        $("#switcher").toggleClass("active");
        return false;
    });
    /*Scroll To Top*/
    if ($('.back-to-top').length) {
        var scrollTrigger = 1000, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.back-to-top').addClass('show');
                }
                else {
                    $('.back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('.back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
    //scrolls down
    //Showcase Slider
    if ($('.showcase-slider').length) {
        $(".showcase-slider").owlCarousel({
            items: 5
            , autoplay: true
            , nav: false
            , dots: true
            , margin: 10
            , responsive: {
                0: {
                    items: 1
                    , dots: false
                    , nav: true
                }
                , 600: {
                    items: 2
                    , dots: false
                    , nav: true
                }
                , 992: {
                    items: 3
                    , dots: false
                    , nav: true
                }
                , 1000: {
                    items: 4
                }
                , 1200: {
                    items: 5
                }
            }
        });
    }
    /*Showcase slider*/
    //client Slider
    if ($('.client-slider').length) {
        $(".client-slider").owlCarousel({
            items: 1
            , autoplay: true
            , nav: true
            , navText: [
            "<i class=' fa fa-angle-left'></i>"
            , "<i class=' fa fa-angle-right'></i>"
        ]
            , dots: false
        });
    }
    /*client slider*/
    /*magnific popup*/

    $('.popup-video').magnificPopup({
        type: 'iframe'
        , iframe: {
            markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' + '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
            patterns: {
                youtube: {
                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
                    id: 'v=', // String that splits URL in a two parts, second part should be %id%
                    // Or null - full URL will be returned
                    // Or a function that should return %id%, for example:
                    // id: function(url) { return 'parsed id'; }
                    src: 'https://www.youtube.com/embed/HnjtZFaJ7rk' // URL that will be set as a source for iframe.
                }
                , vimeo: {
                    index: 'vimeo.com/'
                    , id: '/'
                    , src: 'https://player.vimeo.com/video/%id%'
                }
                , gmaps: {
                    index: '//maps.google.'
                    , src: '%id%&output=embed'
                }
                // you may add here more sources
            }
            , srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
        }
    });
    /*magnific popup*/
    /*scroll reveal animations*/
    window.sr = ScrollReveal();
    sr.reveal('.service-card', {
        duration: 500
    });
    sr.reveal('.about-img', {
        origin: 'right'
        , duration: 2000
    });
    /*sr.reveal('.header-img', {
        origin: 'right'
        , duration: 5000
    });*/
    sr.reveal('.featured-img', {
        origin: 'bottom'
        , duration: 2000
    });
    /*sr.reveal('.header-text', {
        rotate: {
            x: 0
            , y: 100
            , z: 0
        }
        , duration: 2500
    });*/
    /*scroll reveal animations*/
});

/*Our Presence*/
$(document).ready(function(){
	
  $(".Mangalore").hover(function(){
    $(".mangalore").css("display", "block");
    }, function(){
    $(".mangalore").css("display", "none");
  });
	
  $(".Noida").hover(function(){
    $(".noida").css("display", "block");
    }, function(){
    $(".noida").css("display", "none");
  });
	
  $(".Bengaluru").hover(function(){
    $(".bengaluru").css("display", "block");
    }, function(){
    $(".bengaluru").css("display", "none");
  });
	
  $(".Mysore").hover(function(){
    $(".mysore").css("display", "block");
    }, function(){
    $(".mysore").css("display", "none");
  });
	
  $(".Chennai").hover(function(){
    $(".chennai").css("display", "block");
    }, function(){
    $(".chennai").css("display", "none");
  });
	
  $(".Hyderabad").hover(function(){
    $(".hyderabad").css("display", "block");
    }, function(){
    $(".hyderabad").css("display", "none");
  });
	
  $(".Mumbai").hover(function(){
    $(".mumbai").css("display", "block");
    }, function(){
    $(".mumbai").css("display", "none");
  });
	
  $(".Pune").hover(function(){
    $(".pune").css("display", "block");
    }, function(){
    $(".pune").css("display", "none");
  });
	
  $(".Nagpur").hover(function(){
    $(".nagpur").css("display", "block");
    }, function(){
    $(".nagpur").css("display", "none");
  });
	
  $(".Delhi").hover(function(){
    $(".delhi").css("display", "block");
    }, function(){
    $(".delhi").css("display", "none");
  });
	
  $(".Gurgaon").hover(function(){
    $(".gurgaon").css("display", "block");
    }, function(){
    $(".gurgaon").css("display", "none");
  });
	
  $(".Kolkata").hover(function(){
    $(".kolkata").css("display", "block");
    }, function(){
    $(".kolkata").css("display", "none");
  });
	
  $(".Jaipur").hover(function(){
    $(".jaipur").css("display", "block");
    }, function(){
    $(".jaipur").css("display", "none");
  });
	
  $(".Visakhapatnam").hover(function(){
    $(".visakhapatnam").css("display", "block");
    }, function(){
    $(".visakhapatnam").css("display", "none");
  });
  
});

/*Address Location*/
$(document).ready(function(){
  $("#cityName").change(function(){
    var citynames = $('#cityName option:selected').text();
	if(citynames == "Hyderabad") {
		$(".diff-location .city-name").text(citynames);
		$(".diff-location .address").text("Ganga Parvathi Complex, Image Gardens Road, Cyber Hills Colony, VIP Hills, Jaihind Enclave, Madhapur, hyderabad, Telangana 500081");
		$(".diff-location .direction a").attr("href", "https://www.google.com/maps/place/Ganga+Parvathi+Complex,+Image+Gardens+Rd,+Cyber+Hills+Colony,+VIP+Hills,+Jaihind+Enclave,+Madhapur,+Hyderabad,+Telangana+500081/@17.4494155,78.3836913,17z/data=!3m1!4b1!4m5!3m4!1s0x3bcb9161b93567e1:0xf8e15e764812dd8c!8m2!3d17.4494104!4d78.38588");
	} else if(citynames == "Chennai") {
		$(".diff-location .city-name").text(citynames);
		$(".diff-location .address").text("5/90, S4, 2nd Floor, Butt Road, St. Thomas Mount, Chennai - 600089, Tamil Nadu");
		$(".diff-location .direction a").attr("href", "#");
	} else if(citynames == "Pune") {
		$(".diff-location .city-name").text(citynames);
		$(".diff-location .address").text("Office 1002/103 1st floor, Corporate plaza, Senapati Bapat Road, Chaturshringi Temple WalkWay, Chaturshringi, Gokhalenagar, Pune, Maharashtra 411016");
		$(".diff-location .direction a").attr("href", "https://www.google.com/maps/place/Corporate+Plaza/@18.5403015,73.8288939,19.08z/data=!4m5!3m4!1s0x3bc2bf6fe8418c57:0x89962e16aa585e33!8m2!3d18.5397402!4d73.8287862");
	} else if(citynames == "Gurgaon") {
		$(".diff-location .city-name").text(citynames);
		$(".diff-location .address").text("Centrum Plaza, A-40, Ground floor, DLF Golf Course Road, Sector 53, Gurugram-122 003, Haryana");
		$(".diff-location .direction a").attr("href", "#");
	} else if(citynames == "Kolkata") {
		$(".diff-location .city-name").text(citynames);
		$(".diff-location .address").text("2A Building, 6th floor, Eco Space Business-Park Premises, New Town Action Area 2, Rajarhat, Kolkata - 700 156, West Bengal");
		$(".diff-location .direction a").attr("href", "#");
	} else if(citynames == "Mumbai") {
		$(".diff-location .city-name").text(citynames);
		$(".diff-location .address").text("D - 4144, Oberoi Garden Estate-near Chandivali Studio, Yadav Nagar, Chandivali, Mumbai - 400 072, Maharashtra");
		$(".diff-location .direction a").attr("href", "#");
	} else if(citynames == "Bengaluru") {
		$(".diff-location .city-name").text(citynames);
		$(".diff-location .address").text("Siri Shambhavi, #2346, 3rd & 4th Floor, 17th Cross Road, HSR Layout, 1st Sector, Bengaluru: 560 102");
		$(".diff-location .direction a").attr("href", "#");
	}
  });
});

$(document).ready(function(){
	$("#city").change(function(){
		var city = $("#city").val();
		if(city == "Others") {
			$("#othercolor").css({"display":"block"});
		}
		else if(city != "Others") {
			$("#othercolor").css({"display":"none"});
		}
	});
});

/*Contact Form Starts Here*/
$(function() {
$("#ContactSubmit").click(function() {
    var name = $("#name").val();
	var email = $("#email").val();
	var phone = $("#phone").val();
	var city = $("#city").val();
	var othercity = $("#other-city").val();
    var company = $("#company").val();
	var query = $("input[name='queryType']:checked").val();
	var msg = $("#msg").val();
	     
    var dataString = 'name='+ name + '&email=' + email + '&phone=' + phone + '&city=' + city + '&query=' + query + '&msg=' + msg;
	
	if(name == '') {
		$("#contactForm").append('<div class="alert alert-danger"><i class="fa fa-remove"></i> Enter your Name!</div>');
		$("#contactForm .alert-danger").fadeOut(6000);
		return false;
	}
	else if(email == '') {
		$("#contactForm").append('<div class="alert alert-danger"><i class="fa fa-remove"></i> Enter Email!!</div>');
		$("#contactForm .alert-danger").fadeOut(6000);
		return false;
	}
	else if(phone == '') {
		$("#contactForm").append('<div class="alert alert-danger"><i class="fa fa-remove"></i> Enter Phone no.!</div>');
		$("#contactForm .alert-danger").fadeOut(6000);
		return false;
	}
	else if(city == 'none') {
		$("#contactForm").append('<div class="alert alert-danger"><i class="fa fa-remove"></i> Select City!</div>');
		$("#contactForm .alert-danger").fadeOut(6000);
		return false;
	}
	else if(city == 'Others') {
		if(othercity == '') {
			$("#contactForm").append('<div class="alert alert-danger"><i class="fa fa-remove"></i> Enter Other City Name!</div>');
			$("#contactForm .alert-danger").fadeOut(6000);
			return false;
		}
        city = othercity;
	}
	else if (typeof query === "undefined") {
		$("#contactForm").append('<div class="alert alert-danger"><i class="fa fa-remove"></i> Choose your Query!</div>');
		$("#contactForm .alert-danger").fadeOut(6000);
		return false;
	}
	else if(msg == '') {
		$("#contactForm").append('<div class="alert alert-danger"><i class="fa fa-remove"></i> Message Field is Blank!</div>');
		$("#contactForm .alert-danger").fadeOut(6000);
		return false;
	}
	
    var dataString = {
          "email" : email,
          "phone" : phone,
          "firstname" : name,
          "0-2/name" : company,
          "city" : city,
          "0-2/query" : query,
          "details_of_the_query" : msg
    };

    saveLead(dataString, '#contactForm');

   });

});
/*Contact Form Ends Here*/

function saveLead(dataString, form) {
    var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://rest.hungerbox.com/api/lead/request-demo",
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "processData": false,
            "data": JSON.stringify({"form": form, "payload": dataString})
        };

        $.ajax(settings).done(function (response) {
            $(form).append('<div class="alert alert-success"><i class="fa fa-check"></i> Thanks for sharing the details. We will get in touch with you shortly.</div>');
            $(form + " .alert-success").fadeOut(8000);
            $(form)[0].reset();
        }).fail(function (error) {
            $(form).append('<div class="alert alert-danger"><i class="fa fa-remove"></i> Failed to Submit. Please try again later.</div>');
            $(form + " .alert-danger").fadeOut(8000);
        });
            e.preventDefault();
}

/* Career Form */

$('#careerForm')
        .submit(function (e) {
            var data = new FormData(this);
            $.ajax({
                url: 'https://rest.hungerbox.com/api/lead/save/career-form/',
                type: 'POST',
                data: new FormData(this),
                processData: false,
                contentType: false
            })
                .done(function (response) {
                    $("#careerForm").append('<div class="alert alert-success"><i class="fa fa-check"></i> We have received your details. One of our representatives will get in touch with you shortly!</div>');
                    $("#careerForm .alert-success").fadeOut(8000);
                    $("#careerForm")[0].reset();
                })
                .fail(function (error) {
                    var message = error.responseJSON ? error.responseJSON.message : "Something went wrong. Please try again.";
                    $("#contactForm").append('<div class="alert alert-danger"><i class="fa fa-remove"></i> '+ message +'</div>');
                    $("#contactForm .alert-danger").fadeOut(8000);
                });
            e.preventDefault();
        });
/* Career Form */
/*Contact Form Starts Here*/
$(function() {
$("#SubmitBanner").click(function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var city = $("#city").val();
         
    var dataString = 'name='+ name + '&email=' + email + '&phone=' + phone;
    
    if(name == '') {
        $("#bannerContactForm").append('<div class="alert alert-danger"><i class="fa fa-remove"></i> Enter your Name!</div>');
        $("#bannerContactForm .alert-danger").fadeOut(6000);
        return false;
    }
    else if(email == '') {
        $("#bannerContactForm").append('<div class="alert alert-danger"><i class="fa fa-remove"></i> Enter Email!!</div>');
        $("#bannerContactForm .alert-danger").fadeOut(6000);
        return false;
    }
    else if(phone == '') {
        $("#bannerContactForm").append('<div class="alert alert-danger"><i class="fa fa-remove"></i> Enter Phone no.!</div>');
        $("#bannerContactForm .alert-danger").fadeOut(6000);
        return false;
    }
    else if(city == 'none') {
        $("#bannerContactForm").append('<div class="alert alert-danger"><i class="fa fa-remove"></i> Select City!</div>');
        $("#bannerContactForm .alert-danger").fadeOut(6000);
        return false;
    }
    
    else {
        var dataString = {
              "email" : email,
              "phone" : phone,
              "firstname" : name,
              "0-2/name" : "",
              "city" : city,
              "0-2/query" : "Other",
              "details_of_the_query" : ""
        };

        saveLead(dataString, '#bannerContactForm');
    }
    return false;
    });

});
/*Contact Form Ends Here*/


/*Hero Banner Starts Here*/
var slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("homeSlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
/*Hero Banner Ends Here*/

