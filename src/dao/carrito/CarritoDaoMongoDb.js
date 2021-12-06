import ContenedorMongoDb from "../../controller/ContenedorMongoDb.js";

class CarritoDaoMongoDb extends ContenedorMongoDb {
    constructor() {
        super('carrito', {
            productos: { type: [], required: true },
        })
    }

    /* async save(carrito = { productos: [] }) {
        return super.save(carrito)
    } */
}

export default CarritoDaoMongoDb;