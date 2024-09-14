import { html, render } from "https://cdn.jsdelivr.net/npm/lit-html@3.1.2/+esm";
const template = html`
<link rel="stylesheet" href="./css/navbar.css">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">
                <img src="img/LOGO PNGMesa de trabajo 3_1.png" alt="logo" width="100%" height="100%">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto gap-4">
                <li class="nav-item">
                    <a class="nav-link" href="index.html" aria-current="page">INICIO</a>
                </li>
                <!-- MENU DE PRODUCTOS -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">PRODUCTOS</a>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="productos.html">Productos</a></li>
                    <li class="dropdown-submenu">
                        <a class="dropdown-item dropdown-toggle" href="#">Cabello de ángel</a>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="Cabellodeangel.html">cabello de ángel 1.000gr</a></li>
                        <li><a class="dropdown-item" href="Cabellodeangel500g.html">cabello de ángel 500gr</a></li>
                        <li><a class="dropdown-item" href="Cabellodeangel150g.html">cabello de ángel 150gr</a></li>
                        </ul>
                    </li>
                    <li class="dropdown-submenu">
                        <a class="dropdown-item dropdown-toggle" href="#">Hojuelas</a>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="hojuelas450.html">Hojuela 450gr</a></li>
                        <li><a class="dropdown-item" href="Hojuelas.html">Hojuela 225gr</a></li>
                        </ul>
                    </li>
                    <li class="dropdown-submenu">
                        <a class="dropdown-item dropdown-toggle" href="#">Snacks</a>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="chipsnaturales8g.html">Papa chips 8gr</a></li>
                        <li><a class="dropdown-item" href="chipsdelimon.html">Papa chips 22gr</a></li>
                        <li><a class="dropdown-item" href="papasnatural.html">Papa chips 32gr</a></li>
                        <li><a class="dropdown-item" href="pikenatural.html">Pike todo Natural</a></li>
                        <li><a class="dropdown-item" href="pikebbq.html">Pike todo Bbq</a></li>
                        <li><a class="dropdown-item" href="trocillos_pollo.html">Trocillos</a></li>
                        </ul>
                    </li>
                    </ul>
                </li>
                <!-- FIN MENU DE PRODUCTOS -->
                <li class="nav-item"><a class="nav-link" href="conocenos.html">QUIENES SOMOS</a></li>
                <li class="nav-item"><a class="nav-link" href="contactanos.php">CONTÁCTENOS</a></li> 
                </ul>
                <!-- REDES SOCIALES -->
                <div class="row">
                <div class="col">
                    <a href="https://www.facebook.com/Papa-a-la-lata-111384327119353/" target="_blank"><img  class="imagen" src="img/facebook.png"  alt=""></a>
                </div>
                <div class="col">
                    <a href="https://www.instagram.com/papaalalata?igsh=ZHdieDJkbDhpeTJv" target="_blank"><img class="imagen" src="img/instagram.png" alt=""></a>
                </div>
                <div class="col">
                    <a href="https://wa.link/t2idq5" target="_blank"><img class="imagen" src="img/WhathsApp.png" alt=""></a>
                </div>
                </div>
                <!-- FIN REDES SOCIALES -->

            </div>
        </div>
    </nav>`;


class HeaderComponent extends HTMLElement {

  constructor() {
    super();
    render(template, this);
    this.submenus();
  }

  submenus() {
    $(function() {

        $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
          if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
          }

          var $subMenu = $(this).next('.dropdown-menu');
          $subMenu.toggleClass('show');

          $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
            $('.dropdown-submenu .show').removeClass('show');
          });

          return false;
        });
      });
  }
}

customElements.define("header-component", HeaderComponent);