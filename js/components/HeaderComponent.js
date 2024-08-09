import { html, render } from "https://cdn.jsdelivr.net/npm/lit-html@3.1.2/+esm";
const template = html`
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
    <li style="list-style: none;"><a class="inicio" href="conocenos.html" style="text-decoration: none;  text-decoration: none; margin: 45px;">QUIENES SOMOS COMPO</a></li>
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
</header>`;


class HeaderComponent extends HTMLElement {

  constructor() {
    super();
    render(template, this);
  }

}

customElements.define("header-component", HeaderComponent);