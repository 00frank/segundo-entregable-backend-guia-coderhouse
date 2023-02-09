import { promises as fs } from "fs";

class ProductManager {
  constructor() {
    this.path = "./products.json"
    this.products = [];
  }

  static id = 0;

  addProduct = async (title, description, prince, thumbnail, code, stock,) => {
    // agregar validación para comprobar que todos los campos sean recibidos

    // agregar validación para que no se repita la propiedad code antes de agregar un producto 

    // si esta todo ok, sumar uno al contador de id y agregar el producto a la lista
    ProductManager.id++;
    let newProduct = {
      id: ProductManager.id,
      title,
      description,
      prince,
      thumbnail,
      code,
      stock,
    }

    this.products.push(newProduct)

    // hacer uso del metodo writeFile para ir agregando el nuevo producto al archivo de productos (usar await)
  };

  getProducts = async () => {
    // hacer uso del metodo readFile del paquete fs para leer el archivo de productos (usar await)
    let products = [];

    return products;
  }

  getProductById = async (id) => {
    // hacer uso del metodo readFile del paquete fs para leer el archivo de productos (usar await)
    let products = [];

    // usamos find para buscar si el producto esta en el archivo de productos
    let product = products.find((product) => product.id === id);
    return product;
  }


  deleteProduct = async (id) => {
    // hacer uso del metodo readFile del paquete fs para leer el archivo de productos (usar await)
    let products = [];
    
    // llamamos al metodo getProductById para ver si existe ese producto y luego lo eliminamos
    if (this.getProductById(id)) {
      // usamos filter para eliminar si el producto esta en el archivo de productos
      let newProducts = products.filter((products) => products.id !== id);

      // hacer uso del metodo writeFile para modificar el archivo con la nueva lista de productos (usar await)

    } else {
      // no encontro el producto con ese id por lo tanto no elimina nada
      console.log("Product missing");
    }
  }

  updateProducts = async ({ id, ...producto }) => {
    // buscar el producto con el metodo getProductById
    // si lo encuentra modificarlo/eliminarlo de la lista para agregar uno nuevo con las nuevas propiedades
  }
}
