$(document).ready(function() {

  // Marquee partners
  setTimeout( function(){
    $('.services-move-wrapper').liMarquee({
      direction: 'left',  
      loop:-1,      
      scrolldelay: 0,   
      scrollamount:70,  
      circular: true,   
      drag: true      
    });
  }, 1500 );

    // Sign In form Ajax
      function signInForm(){
        var inputs = $('.sign-inputs');
        var emailInput = $('#sign-email');
        var submitBtn = $('#sign-btn');
        var form = $('#sign-me-form');
        var succesMessage = $('.success-mssg');

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
             $('.success-mssg').addClass('active');
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
                $('.incorrect-mssg').addClass('active');
              }              
            }
        });
        
		// Remove invalid class on focus
		inputs.focus(function(event) {
			 $('.incorrect-mssg').removeClass('active');
		});
    };

    signInForm();

});