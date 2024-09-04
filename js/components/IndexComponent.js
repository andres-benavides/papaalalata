import { html, render } from "https://cdn.jsdelivr.net/npm/lit-html@3.1.2/+esm";

// Plantilla del componente

const template = (data) => {
    return html`
      <link rel="stylesheet" href="./css/Index-1.css">
      <div class="container-product">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">

          </div>
  
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div class="row">
              <div class="col">
                <div id="texto-1">
                  <p style="color: #004FF7; font-size: 3em;">${data.title}</p><br>
                  <h2 style="color: #F70022;">Descripción</h2>
                  <h3 style="color: #000;">${data.description}</h3><br>
                  <h2 style="color: #F70022;">Presentación</h2><br>
                  <h3 style="color: #000;">Presentación: ${data.presentation}</h3>
                </div>
              </div>
            </div>
  
            <div class="row">
              <div class="col">
                <div id="redes-1">
                  <a href="https://www.facebook.com/Papa-a-la-lata-111384327119353/" target="_blank"><img class="imagen" src="img/facebook.png" alt=""></a>
                  <a href="https://www.instagram.com/papaalalata?igsh=ZHdieDJkbDhpeTJv" target="_blank"><img class="imagen" src="img/instagram.png" alt=""></a>
                  <a href="https://wa.link/t2idq5" target="_blank"><img class="imagen" src="img/WhathsApp.png" alt=""></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }

  