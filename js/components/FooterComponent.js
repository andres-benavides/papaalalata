import { html, render } from "https://cdn.jsdelivr.net/npm/lit-html@3.1.2/+esm";
const template = html`
<link rel="stylesheet" href="./css/footer.css">
<div class="footer">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
            <img src="img/letras blancas Mesa de trabajo 7.png" class="img-footer">
        </div>

        <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
            <p>
                "Celebrando 25 años en el mercado, nos
                dedicamos a ofrecer productos de papa
                que se distinguen por su calidad
                superior y sabor auténtico. Nuestra
                ambición es crecer e innovar,
                asegurando que cada producto sea
                parte de la tradición y el buen gusto en
                los hogares colombianos".
            </p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
            <h3 style=" color: #FFFF;" >Productos</h3>
            <ul>
            <li><a href="Cabellodeangel.html" style="position: relative; color: #FFFF; font-family: cambria bold; font-size: 20px;">Cabello de angel</a></li>
            <li><a href="Hojuelas.html" style="position: relative; color: #FFFF; font-family: cambria bold; font-size: 20px;">Hojuelas</a></li>
            <li><a href="Snacks.html" style="position: relative; color: #FFFF; font-family: cambria bold; font-size: 20px;">Snacks</a></li>
            </ul>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
            <h3 style="color: #FFFF;">Redes sociales</h3>
            <ul>
            <li><a href="https://www.facebook.com/Papa-a-la-lata-111384327119353/" target="_blank" style=" position: relative;color: #FFFF; font-family: cambria bold; font-size: 20px;">Facebook</a></li>
            <li><a href="https://www.instagram.com/papaalalata?igsh=ZHdieDJkbDhpeTJv" target="_blank" style="position: relative; color: #FFFF; font-family: cambria bold; font-size: 20px;">Instagram</a></li>
            <li><a href="https://wa.link/t2idq5" target="_blank" style="position: relative; color: #FFFF; font-family: cambria bold; font-size: 20px;">WhatsApp</a></li>
            </ul>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
            <h3>Dirección</h3>
            Calle 16c Bis# 79D-33 Barrio Visión<br>
            Colombia Semindustrial, Bogotá<br>
            Tel: 4122130<br>
            WhathsApp: 3133800415<br>
            Correo: ventas@papaalalata.com</p><br>
        </div>
    </div>
</div>`;


class FooterComponent extends HTMLElement {

  constructor() {
    super();
    render(template, this);
  }

}

customElements.define("footer-component", FooterComponent);