import { html, render } from "https://cdn.jsdelivr.net/npm/lit-html@3.1.2/+esm";



const template = (data)=>{

  return( html`
    <link rel="stylesheet" href="./css/related.css">
    <div class="content-related-product">
        <div class="row justify-content-center related-title">
            <div class="col text-center">
                <h1 style="color: #fff;" >PRODUCTOS RELACIONADOS</h1>
            </div>
        </div>   
        <div class="row related-products">
            <div class="col unit-product">
                <div class="row justify-content-center">
                    <div class="col text-center">
                        <img src="${data[0].imagen}" class="related-product">
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col text-center">
                        <a class="btn btn-light btn-related" href="${data[0].url}" >Ver Más</a>
                    </div>
                </div>
            </div>
            <div class="col unit-product">
                <div class="row justify-content-center">
                    <div class="col text-center">
                        <img src="${data[1].imagen}" class="related-product">
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col text-center">
                        <a class="btn btn-light btn-related" href="${data[1].url}" >Ver Más</a>
                    </div>
                </div>
            </div>
            <div class="col unit-product">
                <div class="row justify-content-center">
                    <div class="col text-center">
                        <img src="${data[2].imagen}" class="related-product">
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col text-center">
                        <a class="btn btn-light btn-related" href="${data[2].url}" >Ver Más</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`);
}
class RelatedComponent extends HTMLElement {

  constructor() {
    super();
    this.products = [];
    

    const producstName = this.getAttribute("products");
    this.products = JSON.parse(producstName);
    fetch('./data/products.json')
      .then(response => response.json())
      .then(data => {
        
        const resultArray = [];

        // Recorrer los productos dentro de `this.products`
        this.products.forEach(productName => {
          const productData = data[productName];

          if (productData) {
            // Construir el nuevo objeto según la estructura requerida
            const productObject = {
              imagen: productData.images[0], // Tomar la primera imagen
              url: `${productName}.html` // Aquí puedes agregar la URL que necesites
            };

            // Agregar el objeto al array resultante
            resultArray.push(productObject);
          } else {
            console.error(`Producto con el nombre ${productName} no encontrado`);
          }
        });

        
        const thisTemplate = template(resultArray)
        
        render(thisTemplate, this);
     
        
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error));

    // render(template(data), this);
  }

}

customElements.define("related-component", RelatedComponent);