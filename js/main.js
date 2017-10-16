$(document).ready(function() {

    /*Preloader*/
    setTimeout(function() {
      $('.o-loader').fadeOut('slow', function() {});
    }, 2000);

 // Swipe events init
  var supportTouch = $.support.touch,
            scrollEvent = "touchmove scroll",
            touchStartEvent = supportTouch ? "touchstart" : "mousedown",
            touchStopEvent = supportTouch ? "touchend" : "mouseup",
            touchMoveEvent = supportTouch ? "touchmove" : "mousemove";
    $.event.special.swipeupdown = {
        setup: function() {
            var thisObject = this;
            var $this = $(thisObject);
            $this.bind(touchStartEvent, function(event) {
                var data = event.originalEvent.touches ?
                        event.originalEvent.touches[ 0 ] :
                        event,
                        start = {
                            time: (new Date).getTime(),
                            coords: [ data.pageX, data.pageY ],
                            origin: $(event.target)
                        },
                        stop;

                function moveHandler(event) {
                    if (!start) {
                        return;
                    }
                    var data = event.originalEvent.touches ?
                            event.originalEvent.touches[ 0 ] :
                            event;
                    stop = {
                        time: (new Date).getTime(),
                        coords: [ data.pageX, data.pageY ]
                    };

                    // prevent scrolling
                    if (Math.abs(start.coords[1] - stop.coords[1]) > 10) {
                        event.preventDefault();
                    }
                }
                $this
                        .bind(touchMoveEvent, moveHandler)
                        .one(touchStopEvent, function(event) {
                    $this.unbind(touchMoveEvent, moveHandler);
                    if (start && stop) {
                        if (stop.time - start.time < 1000 &&
                                Math.abs(start.coords[1] - stop.coords[1]) > 30 &&
                                Math.abs(start.coords[0] - stop.coords[0]) < 75) {
                            start.origin
                                    .trigger("swipeupdown")
                                    .trigger(start.coords[1] > stop.coords[1] ? "swipeup" : "swipedown");
                        }
                    }
                    start = stop = undefined;
                });
            });
        }
    };
    $.each({
        swipedown: "swipeupdown",
        swipeup: "swipeupdown"
    }, function(event, sourceEvent){
        $.event.special[event] = {
            setup: function(){
                $(this).bind(sourceEvent, $.noop);
            }
        };
    });

  // Mobile menu
  if ( $(window).width() < 767 ) {
    $('.burger-menu').click(function(event) {

      if ($('.pop-up-sign-up').hasClass('active')) {
        $('.mobile-menu').removeClass('active');
        $('body').removeClass('overflow');
        $('.burger-menu').removeClass('active');
        $('.pop-up-sign-up').removeClass('active'); 
      }
      else {
        $('.burger-menu').toggleClass('active');
        $('.mobile-menu').toggleClass('active');
        $('body').toggleClass('overflow');       
      }
    });

    $('.sign-in-link a').click(function(event) {
      event.preventDefault();
      $('.pop-up-sign-up').toggleClass('active');
      $('body').toggleClass('overflow');
      $('.mobile-menu').toggleClass('active');
    });
  }

	// Animations on scroll

	var $animation_elements = $('.animation-element');
	var $window = $(window);

	function check_if_in_view() {

	  var window_height = $window.height();
	  var window_top_position = $window.scrollTop();
	  var window_bottom_position = (window_top_position + window_height);

	  $.each($animation_elements, function() {

	    var $element = $(this);
	    var element_height = $element.outerHeight();
	    var element_top_position = $element.offset().top;
	    var element_bottom_position = (element_top_position + element_height);

	    //check to see if this current container is within viewport

	    if ((element_bottom_position >= window_top_position) &&
	        (element_top_position - 100 <= window_bottom_position)) {
	      		$element.addClass('in-view');
	    } else {
	      $element.removeClass('in-view');
	    }
	  });
	}

	if ( $(window).width() > 767 ){

		check_if_in_view();

		$window.on('scroll resize', check_if_in_view);
		$window.trigger('scroll');

	}

  // Add shadow to header on scroll
  $(window).on('scroll', function() {
    if ( $(window).scrollTop() > 180 ){
      $('.intro-text-block strong').addClass('invisible');
    } else {
      $('.intro-text-block strong').removeClass('invisible');
    }
  });

  // anchor
    $(".scroll-down").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
  

	// calling sign in

	$('.sign-in-btn').click(function(event) {
    event.preventDefault();
		$(this).toggleClass('close');
		$('.pop-up-sign-up').toggleClass('active');
		$('body').toggleClass('overflow');
	});

  $('.get-started').click(function(event) {
    event.preventDefault();
    $('.sign-in-btn').addClass('close');
    $('.pop-up-sign-up').toggleClass('active');
    $('body').toggleClass('overflow');
   $('.burger-menu').toggleClass('active');
  });  

    // Sign In form Ajax
      function signInPopForm(){
        var inputs = $('.sign-inputs');
        var emailInput = $('#sign-popup-email');
        var submitBtn = $('#sign-popup-btn');
        var form = $('#sign-me-popup-form');
        var succesMessage = $('.success-popup-mssg');

        function validateEmail($email) {
            var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return emailReg.test( $email );
        }

        // Form AJAX
        form.on('submit', function(event) {

            event.preventDefault();

            if (!validateEmail(emailInput.val() )) {
              emailInput.addClass('invalid');
              setTimeout(function(){
                emailInput.removeClass('invalid');
              }, 3000 );
            }                                
                       
            if (validateEmail(emailInput.val()) ) {
              // Serialize the form data.
              var formData = $(this).serialize();

              // Submit the form using AJAX.
              $.ajax({
                  type: 'POST',
                  url: $(this).attr('action'),
                  data: formData,
              })
              .done(function(response) {
             form[0].reset();
             // open success massage
             $('.success-popup-mssg').addClass('active');
             var succesMessage = setTimeout(function(){
              form.css('display', 'block');
              $('.success-mssg').css('display', 'none');
              $('.page-overlay-opened').removeClass('page-overlay-opened');
              $('.order-modal-opened').removeClass('order-modal-opened');
            }, 4000);
              })
              .fail(function(data) {
                  submitBtn.html('Failed');
              });
            } 
            else {
              if ( validateEmail(emailInput.val()) == false ){
                $('.incorrect-mssg-popup').addClass('active');
              }              
            }
        });
        
		// Remove invalid class on focus
		inputs.focus(function(event) {
			 $('.incorrect-mssg-popup').removeClass('active');
		});
    };

    signInPopForm();

// mobile slider
  if ( $(window).width() < 767 )  {

      function mobileSlider(id) {
        var slider = $(id).find('.how-it-works-list > li');
        var photosList = $(id).find('.how-it-works-list');
        var controlLeft = $(id).find('.invisible-controls .left');
        var controlRight = $(id).find('.invisible-controls .right');
        var controls = $(id).find('.mobile-pagination > li');

        photosList.find('li').removeClass('active-slide');
        photosList.find('li:first-of-type').addClass('active-slide');

        $(id).find('.how-it-works-list > li').each(function(index, el) {

          var currentAlbumList = $(this).parent().find('.how-it-works-list');
          var activeSlideIndex = $(this).index();
          controls.eq(0).addClass('active');

          var numberOfSlides = photosList.find('li').length;
          var slideWidth = 100/numberOfSlides;

          photosList.find('li').css('width', slideWidth + '%');
          photosList.css('width', 100*numberOfSlides + '%');
          photosList.css('transform', 'translateX(-' + 0 + '%)');
          setTimeout(function(){
            photosList.css('transition', 'transform .8s ease-in-out');
          }, 600);
        });


        controlRight.on('click', function(event) {
          var numberOfSlides = photosList.find('li').length;
          var slideWidth = 100/numberOfSlides;
          var activeSlide = photosList.find('li.active');
          var activeSlideInex = photosList.find('li.active').index();

          if ( activeSlide.next('li').length > 0 ){
            photosList.css('transform', 'translateX(-' + (activeSlideInex + 1)*slideWidth + '%)');
            activeSlide.removeClass('active').next('li').addClass('active');
          } else {
            photosList.css('transform', 'translateX(0)');
            activeSlide.removeClass('active');
            photosList.find('li:first-of-type').addClass('active');
          }
        });

        controlLeft.on('click', function(event) {
          var numberOfSlides = photosList.find('li').length;
          var slideWidth = 100/numberOfSlides;
          var activeSlide = photosList.find('li.active');
          var activeSlideInex = photosList.find('li.active').index();

          if ( activeSlide.prev('li').length > 0 ){
            photosList.css('transform', 'translateX(-' + (activeSlideInex - 1)*slideWidth + '%)');
            activeSlide.removeClass('active').prev('li').addClass('active');
          } else {
            photosList.css('transform', 'translateX(-' + (numberOfSlides - 1)*slideWidth + '%)');
            activeSlide.removeClass('active');
            photosList.find('li:last-of-type').addClass('active');
          }
        });

      // MOBILE SWIPE SLIDER
          var slides = photosList.find('li');
          var slidesNumber=slides.length;

          photosList.on('swipeleft', function(event){
          var numberOfSlides = photosList.find('li').length;
          var slideWidth = 100/numberOfSlides;
          var activeSlide = photosList.find('li.active');
          var activeSlideInex = photosList.find('li.active').index();

          if ( activeSlide.next('li').length > 0 ){
            photosList.css('transform', 'translateX(-' + (activeSlideInex + 1)*slideWidth + '%)');
            activeSlide.removeClass('active').next('li').addClass('active');
            controls.removeClass('active');
            controls.eq( activeSlideInex + 1 ).addClass('active');
          } else {
            photosList.css('transform', 'translateX(0)');
            activeSlide.removeClass('active');
            controls.removeClass('active');
            photosList.find('li:first-of-type').addClass('active');
            controls.eq(0).addClass('active');
          }
        });
        photosList.on('swiperight', function(event){
          var numberOfSlides = photosList.find('li').length;
          var slideWidth = 100/numberOfSlides;
          var activeSlide = photosList.find('li.active');
          var activeSlideInex = photosList.find('li.active').index();

          if ( activeSlide.prev('li').length > 0 ){
            photosList.css('transform', 'translateX(-' + (activeSlideInex - 1)*slideWidth + '%)');
            activeSlide.removeClass('active').prev('li').addClass('active');
            controls.removeClass('active');
            controls.eq( activeSlideInex - 1 ).addClass('active');
          } else {
            photosList.css('transform', 'translateX(-' + (numberOfSlides - 1)*slideWidth + '%)');
            activeSlide.removeClass('active');
            controls.removeClass('active');
            photosList.find('li:last-of-type').addClass('active');
            controls.eq( numberOfSlides - 1 ).addClass('active');
          }
        });

        controls.on('click', function() {
          var thisIndex = $(this).index();
          var numberOfSlides = photosList.find('li').length;
          var slideWidth = 100/numberOfSlides;

          photosList.find('li').removeClass('active');
          controls.removeClass('active');
          photosList.find('li').eq(thisIndex).addClass('active');
          controls.eq(thisIndex).addClass('active');
          photosList.css('transform', 'translateX(' + -thisIndex*slideWidth + '%)');
        });

      };

      mobileSlider('#mobile-slider-front-page');
      mobileSlider('#mobile-slider-design-page');
  }    

});