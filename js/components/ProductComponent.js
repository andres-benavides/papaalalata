import { html, render } from "https://cdn.jsdelivr.net/npm/lit-html@3.1.2/+esm";



const template = (data)=>{

  return( html`
    <div>
        <div id="seccion-1">
            <div class="imagen-1">
              ${data.images.map((image) => html`<img src="${image}"  style="width: 120%; height: 100%;" alt="" >`)}
                        
            </div>
            <div id="texto-1">
                <p  style=" color: #004FF7; font-family:JOckey one ; font-size: 3em;">${data.title}</p><br>
                <h2 style=" color: #F70022; font-family:JOckey one;">Descripción</h2>
                <h3 style=" color: #000; font-family: proxima nova;">${data.description}</h3><br>
                <h2 style=" color: #F70022; font-family: JOckey one;">Presentación</h2><br>
                <h3 style=" color: #000; font-family: proxima nova;">Presentación: ${data.presentation}</h3>
            </div>

            <div id="redes-1">
            <a href="https://www.facebook.com/Papa-a-la-lata-111384327119353/" target="_blank"><img  class="imagen" src="img/facebook.png"  alt=""></a>
            <a href="https://www.instagram.com/papaalalata?igsh=ZHdieDJkbDhpeTJv" target="_blank"><img class="imagen" src="img/instagram.png" alt=""></a>
            <a href="https://wa.link/t2idq5" target="_blank"><img class="imagen" src="img/WhathsApp.png" alt=""></a>
        </div>
        </div>

    </div>`);
}
class ProductComponent extends HTMLElement {

  constructor() {
    super();
   
    const productName = this.getAttribute("product");
    fetch('./data/products.json')
      .then(response => response.json())
      .then(data => {
        // Encontrar el objeto que corresponde al producto especificado
        const productData = data[productName];

        if (productData) {
          // Renderizar la información del producto
          render(template(productData), this);
        } else {
          console.error(`Producto con el nombre ${productName} no encontrado`);
        }
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error));

    // render(template(data), this);
  }

}

customElements.define("product-component", ProductComponent);