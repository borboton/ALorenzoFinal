import ContenedorMongoDb from "../../controller/ContenedorMongoDb.js";

class CarritoDaoMongoDb extends ContenedorMongoDb {
    constructor() {
        super('./DB/productos.json')
    }
}

export default CarritoDaoMongoDb;