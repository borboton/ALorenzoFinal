
class ContenedorMemoria {
    constructor() {
        this.elementos = []
    }

    async save(req){
        const productos = await this.getAll()
        req.id = Math.max(...productos.map(obj => obj.id), 0) + 1
        req.ts = new Date()
        productos.push(req)
        await this.write(productos)
        return productos
    }
    
    async getAll(ruta){        
        return [ ...this.elementos ]        
    };

    async write(productos){
        this.elementos.push(productos)
        return productos
    };

    async getById(req){
        const elem = this.elementos.find(elem => elem.id == req.params.id)
        if ('') {            
            return ({ error : 'producto no encontrado' })
        } else {
            return elem
        }
    };

    async editById(req, res){
        elem.id = Number(elem.id)
        const index = this.elementos.findIndex(p => p.id == elem.id)
        if (index == -1) {
            throw new Error(`Error al actualizar: elemento no encontrado`)
        } else {
            this.elementos[ index ] = elem
            return elem
        }
    };

    async deleteById(req){     
        const index = this.elementos.findIndex(elem => elem.id == id)
        if (index == -1) {
            throw new Error(`Error al borrar: elemento no encontrado`)
        } else {
            return this.elementos.splice(index, 1)
        }
    };

    async deleteAll(){     
        this.elementos = []
    };
}

export default ContenedorMemoria