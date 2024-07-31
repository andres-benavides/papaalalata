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

  //ENVIAR FORMULARIO
  $('#btn-form').on('click', function(e){
    e.preventDefault();
    const ans = captcha.valid($('input[name="code"]').val());
   
    if(ans){
      $('#contact-form')[0].reset();
      $('#save-massage').fadeIn();
    }
    // $.ajax({
    //     url: 'http://localhost:8585/papaalalata/insert_contact.php',
    //     type: 'POST',
    //     data: $('#contact-form').serialize(),
    //     success: function(response) {
    //         alert(response);
    //     },
    //     error: function(xhr, status, error) {
    //         console.error(xhr.responseText);
    //     }
    // });
  });
 
});