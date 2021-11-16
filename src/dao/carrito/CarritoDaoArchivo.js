import ContenedorArchivo from "../../controller/ContenedorArchivo.js";

class CarritoDaoArchivo extends ContenedorArchivo {
    constructor() {
        super('./DB/productos.json')
    }
}

export default CarritoDaoArchivo;