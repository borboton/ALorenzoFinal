import ContenedorMongoDb from "../../controller/ContenedorMongoDb.js";

class ProductosDaoMongoDb extends ContenedorMongoDb {
    constructor() {
        super('./DB/productos.json')
    }
}

export default ProductosDaoMongoDb;