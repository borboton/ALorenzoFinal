import ContenedorArchivo from "../../controller/ContenedorArchivo.js";

class CarritoDaoArchivo extends ContenedorArchivo {
    constructor() {
        super('./DB/carrito.json')
    }
}

export default CarritoDaoArchivo;