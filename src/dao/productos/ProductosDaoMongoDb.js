import ContenedorMongoDb from "../../controller/ContenedorMongoDb.js";

class ProductosDaoMongoDb extends ContenedorMongoDb {
    constructor() {
        super('productos', {
            id: { type: Number, required: true },
            ts: { type: String, required: true },
            nombre: { type: String, required: true },
            descripcion: { type: String, required: true },
            codigo: { type: Number, required: true },
            foto: { type: String, required: true },
            precio: { type: Number, required: true }, 
            stock: { type: Number, required: true }
        })
    }
}

export default ProductosDaoMongoDb;