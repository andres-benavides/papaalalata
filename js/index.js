$( document ).ready(function() {

  //validar email
  $('#email').on('keypress',function(e){
    var email = $('#email').val();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    console.log(email)
    if (!emailRegex.test(email)) {
        $('#subscribe-message').text('Por favor, introduce un correo electrónico válido.');
        return; 
    } else {
        $('#subscribe-message').text('Suscribete a nuestro sitio.');
    }
  })

  
  //ENVIAR FORMULARIO
  $('#btn-subscribe').on('click', function(e){
    e.preventDefault();
  

    var email = $('#email').val();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (!emailRegex.test(email)) {
        $('#subscribe-message').text('Por favor, introduce un correo electrónico válido.');
        
        return; 
    } else {
        $('#subscribe-message').text('Suscribete a nuestro sitio.');
    }
   
    
      $('#btn-subscribe').addClass('disabled');
    
       $.ajax({
        url: './core/insert_subscribe.php',
        type: 'POST',
        data: $('#subscribe-form').serialize(),
        success: function(response) {
              $('#subscribe-form')[0].reset();
              $('#subscribe-message').text('Gracias por suscribirte');
              $('#btn-subscribe').removeClass('disabled');
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText);
            $('#btn-subscribe').removeClass('disabled');
        }
    });
    
   
  });
 
});