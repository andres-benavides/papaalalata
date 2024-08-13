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
                                <li style="list-style: none;" >
                                    <a class="inicio-1" style=" text-align: center; text-decoration: none; " >Cabello de angel</a>
                                        <ul class="sub-menu-1">
                                            <li style="width: 100%; height: 25px;" ><a   class="inicio-sub-1" href="Cabellodeangel.html">cabello de ángel 1.000gr</a></li>
                                            <li style="width: 100%; height: 25px;" ><a  class="inicio-sub-1" href="Cabellodeangel500g.html">cabello de ángel 500gr  </a></li>
                                            <li style="width: 100%; height: 25px;" ><a  class="inicio-sub-1" href="Cabellodeangel150g.html">cabello de ángel 150gr</a></li>
                                        </ul>
                                </li>
                                <li style="list-style: none;"  >
                                    <a class="inicio-1" style=" text-align: center; text-decoration: none;" >Hojuelas</a>
                                        <ul class="sub-menu-2" style="margin-top:-5%;" >
                                            <li style="width: 100%; height: 25px;" ><a   class="inicio-sub-2" href="hojuelas450.html">Hojuela 450gr</a></li>
                                            <li style="width: 100%; height: 25px;" ><a  class="inicio-sub-2" href="Hojuelas.html">Hojuela 225gr</a></li>
                                        </ul>
                                </li>
                                <li style="list-style: none;" >
                                    <a class="inicio-1" style=" text-align: center; text-decoration: none;" >Snacks</a>
                                    <ul class="sub-menu-3" style="margin-top:10%;">
                                        <li style="width: 100%; height: 15%; margin-top:-5px;" ><a   class="inicio-sub-3" href="chipsnaturales8g.html">Papa chips 8gr</a></li>
                                        <li style="width: 100%; height: 25%; margin-top:10px;" ><a  class="inicio-sub-3" href="chipsdelimon.html">Papa chips 22gr</a></li>
                                        <li style="width: 100%; height: 25%;" ><a  class="inicio-sub-3" href="papasnatural.html">Papa chips 32gr</a></li>
                                        <li style="width: 100%; height: 25%;" ><a   class="inicio-sub-3" href="pikenatural.html">Pike todo Natural</a></li>
                                        <li style="width: 100%; height: 25%;" ><a   class="inicio-sub-3" href="pikebbq.html">Pike todo Bbq</a></li>
                                        <li style="width: 100%; height: 25%;" ><a   class="inicio-sub-3" href="trocillos_pollo.html">Trocillos</a></li>
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
</header>`;


class HeaderComponent extends HTMLElement {

  constructor() {
    super();
    render(template, this);
  }

}

customElements.define("header-component", HeaderComponent);