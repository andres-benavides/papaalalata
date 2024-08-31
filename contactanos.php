<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/contactenos.css">
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.0/jquery.validate.min.js"></script>
    <script src="js/alphanumeric-captcha/js/jquery-captcha.min.js"></script>
    <script src="js/contactenos.js"></script>
    <script src="js/index.js"></script>
    <script type="module" src="js/indexComponent.js"></script>
    <title>Contacto</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="js/libs/popper.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

</head>
<body>
    
    <!---ESTRUCTURA HEADER-+-NAV-->
    <header-component></header-component>
    <!---Fin de Header--->
<div class="general">
            <!---boton de whathsapp
            <a href="https://api.whatsapp.com/send?phone=573133800415" class="btn-wsp" target="_blank">
                    <img src="img/BOTON WHATSAPPArtboard 1.png" style="width: 100%; height: 100%;" alt="">
                </a>
                Fin de boton-->


        <!----Seccion-1--> 
                    <div class="row"> 
                        <div class="col">
                            <div class="row">
                                <div class="col" id="slider">
                                    <div id="contenedor">
                                        <div id="imagen-1">
                                             <h1>CONTACTANOS</h1>
                                        </div>
                                        <div id="imagen-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>       
                    <!----Fin de seccion 1-->


                    <!---Seccion-2-->




                    <div class="row">
                        <div class="col" id="seccion-2">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-parent">
                                                <form class="form" autocomplete="off" id="contact-form">
                                                        <h1 style="font-size: 3em; width: 3%; height: 2%; text-align: center; color: gray; opacity: 40%;">Cotizar</h1>
                                                        <input type="text" name="name" placeholder="Nombre" class="campo" />
                                                        <input type="text" name="lastname" placeholder="Apellido" class="campo" />
                                                        <input type="email" name="email" placeholder="Correo" class="campos" id="email"/>
                                                        <input type="text" name="phone" placeholder="Telefono" class="campos" />
                                                    <div class="desplegable">
                                                        <select class="links" name="product">                
                                                            <option value="Papa Cabello de angel 1000 gramos">Papa Cabello de angel 1000 gramos</option>
                                                            <option value="Papa Cabello de angel 500 gramos">Papa Cabello de angel 500 gramos</option>
                                                            <option value="Papa Cabello de angel 150 gramos">Papa Cabello de angel 150 gramos</option>
                                                            <option value="Cabello de ángel tipo B">Cabello de ángel tipo B</option>
                                                            <option value="Cabello de ángel tipo A">Cabello de ángel tipo A</option>
                                                            <option value="Papa Hojuela 225 gramos">Papa Hojuela 225 gramos</option>
                                                            <option value="Papa Hojuela 450 gramos">Papa Hojuela 450 gramos</option>
                                                            <option value="Pike todo natural">Pike todo natural</option>
                                                            <option value="Pike todo Bbq">Pike todo Bbq</option>
                                                            <option value="Papa chips 32 gramos">Papa chips 32 gramos</option>
                                                            <option value="Papa chips 22 gramos">Papa chips 22 gramos</option>
                                                            <option value="Papa chips 8 gramos">Papa chips 8 gramos</option>
                                                            <option value="Trocillo de limon">Trocillo de limon</option>
                                                            <option value="Trocillo de Queso">Trocillo de Queso</option>
                                                            <option value="Trocillo de Pollo">Trocillo de Pollo</option>
                                                        </select>
                                                    </div>   

                                                    <textarea class="comentarios" name="message" placeholder="Comentarios"></textarea>
                                                        <div id="captcha-content">
                                                                <canvas id="canvas"></canvas>
                                                                <label for="code">Ingresa el código</label>
                                                                <input name="code" id="code" />
                                                        </div>

                                                        <div class="enviar" id="btn-form">
                                                            Solicitud de presupuesto
                                                        </div>

                                                        <div id="messages">
                                                            <h3 id="save-message">Gracias por comunicarte. pronto nos pondremos en contacto</h3>
                                                            <h3 id="error-message"></h3>
                                                        </div>
                                                </form>
                                        </div>
                                    </div>
                                </div>
                        </div>                   
                    </div>
<!---Fin de seccion 2-->

<!---Seccion-3-->      
            <div class="row">
                <iframe class="maps"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5779342418036!2d-74.15140972628019!3d4.669082741933472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9cf55c00448d%3A0x53e8aa9f6b489b1c!2zQ2wuIDE2YyBCaXMsIEZvbnRpYsOzbiwgQm9nb3TDoQ!5e0!3m2!1ses-419!2sco!4v1722041885359!5m2!1ses-419!2sco" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
<!---fin de seccion-3-->  

                    <!---footer-->
                    <footer-component></footer-component>
                    <!---fin-de-seccion-3-footer-->


    </div>
</body>
</html>