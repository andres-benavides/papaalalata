import { html, render } from "https://cdn.jsdelivr.net/npm/lit-html@3.1.2/+esm";

// Plantilla del componente
const template = (data) => {
  return html`
    <link rel="stylesheet" href="./css/section.css">
    <div class="row content-section">
      ${Object.entries(data).map(
        ([key, product]) => html`
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 content-product">
            <div class="row justify-content-center">
              <div class="col text-center">
                <img src="${product.images[0]}" class="img-fluid img-product">
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col text-center">
                <a class="btn btn-outline-primary" href="${key}.html" >Ver Más</a>
              </div>
            </div>
          </div>`
      )}
    </div>`;
}

// Definición del componente
class SectionsComponent extends HTMLElement {

  constructor() {
    super();
    const productType = this.getAttribute("products-types");

    fetch('./data/products.json')
      .then(response => response.json())
      .then(data => {
        // Convertimos el objeto a un array de entradas [clave, valor]
        const productsEntries = Object.entries(data);

        // Filtramos las entradas según el 'section-type'
        const filteredProductsEntries = productsEntries.filter(([key, product]) => product['section-type'] === productType);

        // Reconstruimos el objeto con las claves originales
        const filteredProducts = Object.fromEntries(filteredProductsEntries);
 
        if (Object.keys(filteredProducts).length > 0) {
          const thisTemplate = template(filteredProducts);
          render(thisTemplate, this);
        } else {
          console.error(`Producto con el nombre ${productType} no encontrado`);
        }
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
  }

}

customElements.define("section-component", SectionsComponent);
