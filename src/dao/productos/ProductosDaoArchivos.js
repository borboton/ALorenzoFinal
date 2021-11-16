import ContenedorArchivo from "../../controller/ContenedorArchivo.js";

class ProductosDaoArchivos extends ContenedorArchivo {
    constructor() {
        super('./DB/productos.json')
    }
}

export default ProductosDaoArchivos;