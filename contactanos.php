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
    <title>Contacto</title>
</head>
<body>
    <div class="general">
        <!---ESTRUCTURA HEADER-+-NAV-->
    <header>
        <img src="img/31cf39_0a52ef63125b4bdeb6b244610d783645~mv2.png"  style="width: 100%; height: 100%;" alt="">
        <section id="logo">
            <img src="img/LOGO PNGMesa de trabajo 3_1.png" style=" padding-top: 3%; margin-left: -8%;" alt="">
        </section>
  <!--NAV-------->
  <section id="nav">
    <ul class="menu">
        <li  style="list-style: none;"><a class="inicio" href="index.html" style="  text-decoration: none;  text-decoration: none; margin: 45px;">INICIO</a></li>
            <li  style="list-style: none;" >
                <a class="inicio" href="productos.html" style="text-decoration: none; margin: 45px;">PRODUCTOS</a>
                    <ul>
                        <li style="list-style: none;" ><a class="inicio" href="Cabellodeangel.html" style=" text-align: center; text-decoration: none; " >Cabello de angel</a></li>
                        <li style="list-style: none;"  ><a class="inicio" href="Hojuelas.html" style=" text-align: center; text-decoration: none;" >Hojuelas</a></li>
                        <li style="list-style: none;" >
                            <a class="inicio" href="Snacks.html" style=" text-align: center; text-decoration: none;" >Snacks</a>
                            <ul class="sub-menu">
                                <li style="width: 100%; height: 25%;" ><a   class="inicio-sub" href="chipsnaturales8g.html">Papa chips 8g</a></li>
                                <li style="width: 100%; height: 25%;" ><a  class="inicio-sub" href="chipsbbq.html">Papa chips 16g</a></li>
                                <li style="width: 100%; height: 25%;" ><a  class="inicio-sub" href="chipsdelimon.html">Papa chips 22g</a></li>
                                <li style="width: 100%; height: 25%;" ><a   class="inicio-sub" href="trocillos_pollo.html">Trocillos</a></li>
                            </ul>
                        </li>
                    </ul>
            <li style="list-style: none;"><a class="inicio" href="conocenos.html" style="text-decoration: none;  text-decoration: none; margin: 45px;">QUIENES SOMOS</a></li>
            <li style="list-style: none;"><a class="inicio" href="contactanos.php" style="text-decoration: none;  text-decoration: none; margin: 45px; ">CONTÁCTENOS</a></li>  
        </li>
    </ul>
</section>
<!---fIN DE NAV-->

        <section id="redes">
                <a href="https://www.facebook.com/Papa-a-la-lata-111384327119353/" target="_blank"><img  class="imagen" src="img/facebook.png"  alt=""></a>
                <a href="https://www.instagram.com/papaalalata?igsh=ZHdieDJkbDhpeTJv" target="_blank"><img class="imagen" src="img/instagram.png" alt=""></a>
                <a href="https://wa.link/t2idq5" target="_blank"><img class="imagen" src="img/WhathsApp.png" alt=""></a>
        </section>
    </header>
    <main class="main">

            <!---boton de whathsapp-->
            <a href="https://api.whatsapp.com/send?phone=573133800415" class="btn-wsp" target="_blank">
                <img src="img/BOTON WHATSAPPArtboard 1.png" style="width: 100%; height: 100%; margin-left: 600%;" alt="">
            </a>
            <!--Fin de boton-->



        <div id="slider">
            <div id="contenedor">
                <div id="imagen-1">
                    <h1>CONTACTANOS</h1>
                </div>
                <div id="imagen-2">
                </div>
            </div>
        </div>
        <div id="seccion-2">
            <div id="contenedor-2">
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
        <section class="maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5779342418036!2d-74.15140972628019!3d4.669082741933472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9cf55c00448d%3A0x53e8aa9f6b489b1c!2zQ2wuIDE2YyBCaXMsIEZvbnRpYsOzbiwgQm9nb3TDoQ!5e0!3m2!1ses-419!2sco!4v1722041885359!5m2!1ses-419!2sco" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </main>
<!----Fin de main-->
<!---footer-->
<div id="seccion-3">
    <img src="img/azul fondo Mesa de trabajo 1.png" style="width: 100%; height: 100%; " alt="">
    <Section style=" width: 18%; height: 78%; position: relative; margin-top: -21%;">
        <img src="img/letras blancas Mesa de trabajo 7.png" style="width: 80%; height: 80%; padding-left: 6%; padding-top: 1%;" alt="">
    </Section>
    <Section style="width: 20%; height: 98%; position: relative; margin-top: -18%; margin-left: 18%; font-family: cambria bold;">
        <p style="text-align: left; color: #FFFF; padding-top: 10%; ">
            "Celebrando 25 años en el mercado, nos"<br>
            dedicamos a ofrecer productos de papa<br>
            que se distinguen por su calidad<br>
            superior y sabor auténtico. Nuestra<br>
            ambición es crecer e innovar,<br>
            asegurando que cada producto sea<br>
            parte de la tradición y el buen gusto en<br>
            los hogares colombianos".
        </p>
    </Section>
    <Section style="  width: 12%; height: 48%; position: relative; margin-top: -20%; margin-left: 39%;">
        <h3 style="font-family: cambria bold; color: #FFFF;" >Productos</h3><br>
        <br>
        <a href="Cabellodeangel.html" style="position: relative; color: #FFFF; font-family: cambria bold; font-size: 20px;">Cabello de angel</a>
        <a href="Hojuelas.html" style="position: relative; color: #FFFF; font-family: cambria bold; font-size: 20px;">Hojuelas</a><br>
        <a href="Snacks.html" style="position: relative; color: #FFFF; font-family: cambria bold; font-size: 20px;">Snacks</a>
    </Section>
    <Section style="  width: 10%; height: 47%; position: relative; margin-top: -143px; margin-left: 50%;">
        <h3 style="font-family: cambria bold; color: #FFFF;">Redes sociales</h3><br>
        <br>
        <a href="https://www.facebook.com/Papa-a-la-lata-111384327119353/" target="_blank" style=" position: relative;color: #FFFF; font-family: cambria bold; font-size: 20px;">Facebook</a><br>
        <a href="https://www.instagram.com/papaalalata?igsh=ZHdieDJkbDhpeTJv" target="_blank" style="position: relative; color: #FFFF; font-family: cambria bold; font-size: 20px;">Instagram</a><br>
        <a href="https://wa.link/t2idq5" target="_blank" style="position: relative; color: #FFFF; font-family: cambria bold; font-size: 20px;">WhatsApp</a>
    </Section>
    <Section style="  color: #FFFF; width: 20%; height: 78%; position: relative; margin-top: -140px; margin-left: 62%; font-family: cambria bold;">
        <h3>Dirección</h3><br>
        <p>Calle 16c Bis# 79D-33 Barrio Visión<br>
        Colombia Semindustrial, Bogotá<br>
        Tel: 4122130<br>
        WhathsApp: 3133800415<br>
        Correo: ventas@papaalalata.com<br></p>
    </Section>

</div>
<!---fin-de-seccion-3-footer-->


    </div>
</body>
</html>