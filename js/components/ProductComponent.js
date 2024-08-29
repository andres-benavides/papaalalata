import { html, render } from "https://cdn.jsdelivr.net/npm/lit-html@3.1.2/+esm";

// Plantilla del componente
const template = (data) => {
  return html`
    <link rel="stylesheet" href="./css/container-product.css">
    <div class="container-product">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          ${data.images.length > 1
            ? html`
              <div id="myCarousel" class="carousel carousel-dark slide">
                <div class="carousel-inner">
                  ${data.images.map(
                    (image, index) => html`
                    <div class="carousel-item ${index === 0 ? 'active' : ''}">
                      <img src="${image}" alt="" class=""/>
                    </div>`
                  )}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>`
            : html`
              <img src="${data.images[0]}" alt="" class="img-product" />`}
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

// Definición del componente
class ProductComponent extends HTMLElement {

  constructor() {
    super();
    const productName = this.getAttribute("product");

    fetch('./data/products.json')
      .then(response => response.json())
      .then(data => {
        const productData = data[productName];
        if (productData) {
          const thisTemplate = template(productData);
          render(thisTemplate, this);
          this.addEventListeners();
        } else {
          console.error(`Producto con el nombre ${productName} no encontrado`);
        }
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
  }

  addEventListeners() {
    const myCarouselElement = this.querySelector('#myCarousel');
    if (myCarouselElement) {
      new bootstrap.Carousel(myCarouselElement, {
        interval: 2000,
        touch: false
      });
    }
  }
}

customElements.define("product-component", ProductComponent);
