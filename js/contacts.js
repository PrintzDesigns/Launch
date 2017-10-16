$(document).ready(function() {
 
// FORM
    function sendContactsForm(){
        var inputs = $('.contacts-form-input-wrapper input');
        var nameInput = $('#user-name');
        var emailInput = $('#user-email');
        var submitBtn = $('#send-btn');
        var form = $('#contacts-form');
        var succesMessage = $('.success-mssg-block');
        var antiBotInput = $('.varificate-input');

      // Form fields label up
      inputs.on('keyup', function(event) {
        if ( $(this).val() != '' ){
          $(this).addClass('not-empty');
        } else {
          $(this).removeClass('not-empty');
        }
      });

       $('.contacts-form-input-wrapper textarea').on('keyup', function(event) {
        if ( $(this).val() != '' ){
          $(this).addClass('not-empty');
        } else {
          $(this).removeClass('not-empty');
        }
      });

      inputs.each(function(index, el) {
        if ( $(this).val() != '' ){
          $(this).addClass('not-empty');
        } else {
          $(this).removeClass('not-empty');
        }
      });

        function validateName($name) {
            var nameReg = /^[a-zA-Zа-яА-Я ]{2,3000}$/;
            return nameReg.test( $name );
        }

        function validateEmail($email) {
            var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return emailReg.test( $email );
        }

        // Form AJAX
        form.on('submit', function(event) {
          
            event.preventDefault();
            if (!validateName(nameInput.val() )) {
              nameInput.parent('.contacts-form-input-wrapper').addClass('invalid');
              setTimeout(function(){
                nameInput.parent('.contacts-form-input-wrapper').removeClass('invalid');
              }, 3000 );
            }

            if (!validateEmail(emailInput.val() )) {
              emailInput.parent('.contacts-form-input-wrapper').addClass('invalid');
              setTimeout(function(){
                emailInput.parent('.contacts-form-input-wrapper').removeClass('invalid');
              }, 3000 );
            }                                
                       
            if (validateName(nameInput.val() ) && validateEmail(emailInput.val()) ) {
              // Serialize the form data.
              var formData = $(this).serialize();

              // Submit the form using AJAX.
              $.ajax({
                  type: 'POST',
                  url: $(this).attr('action'),
                  data: formData,
                  beforeSend: function(){
                      submitBtn.html('SENDING...');
                  }
              })
            .done(function(response) {
             submitBtn.html('SEND FORM');
             form[0].reset();
             nameInput.removeClass('invalid');
             // open success massamge
             $('#contacts-form').css('display', 'none');
             $('.success-mssg-block').css('display', 'block');
             var succesMessage = setTimeout(function(){
              $('#contacts-form').css('display', 'block');
              $('.success-mssg-block').css('display', 'none');
              inputs.removeClass('not-empty');
              $('.contacts-form-input-wrapper textarea').removeClass('not-empty');
            }, 5000);
              })
              .fail(function(data) {
                  submitBtn.html('Failed');
              });
            } 
            else {
              if ( validateName(nameInput.val()) == false ){
                nameInput.addClass('invalid');
              }
              if ( validateEmail(emailInput.val()) == false ){
                emailInput.addClass('invalid');
              }              
            }
        });
    };

    sendContactsForm();

   });   