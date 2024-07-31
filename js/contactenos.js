$( document ).ready(function() {

  const captcha = new Captcha($('#canvas'),{
    length: 4,
    width: 100,
    height: 40,
    font: 'bold 23px Arial',
    resourceType: 'aA0', // a-lowercase letters, A-uppercase letter, 0-numbers
    resourceExtra: [],
    clickRefresh: true,
  });
  //validar email
  $('#email').on('keypress',function(e){
    var email = $('#email').val();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    console.log(email)
    if (!emailRegex.test(email)) {
        $('#error-message').text('Por favor, introduce un correo electrónico válido.');
        $('#error-message').fadeIn();
        return; 
    } else {
        $('#error-message').text('');
    }
  })

  
  //ENVIAR FORMULARIO
  $('#btn-form').on('click', function(e){
    e.preventDefault();
    const ans = captcha.valid($('input[name="code"]').val());

    var email = $('#email').val();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (!emailRegex.test(email)) {
        $('#error-message').text('Por favor, introduce un correo electrónico válido.');
        $('#error-message').fadeIn();
        return; 
    } else {
        $('#error-message').text('');
    }
   
    if(ans){
      $('#btn-form').addClass('disabled');
    
       $.ajax({
        url: './core/insert_contact.php',
        type: 'POST',
        data: $('#contact-form').serialize(),
        success: function(response) {
              $('#contact-form')[0].reset();
              $('#save-message').fadeIn();
              $('#btn-form').removeClass('disabled');
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText);
            $('#btn-form').removeClass('disabled');
        }
    });
    }
   
  });
 
});