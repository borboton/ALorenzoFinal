import ContenedorFirebase from "../../controller/ContenedorFirebase.js";

class CarritoDaoMongoDb extends ContenedorFirebase {
    constructor() {
        super('carrito', {
            productos: { type: [], required: true }
        })
    }

    /* async save(carrito = { productos: [] }) {
        return super.save(carrito)
    } */
}

export default CarritoDaoMongoDb;