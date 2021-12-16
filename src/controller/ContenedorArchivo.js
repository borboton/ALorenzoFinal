import { promises as fs } from "fs";
class ContenedorArchivo{
    constructor(ruta){
        this.dataource = ruta;
    }
    async save(req){        
        const productos = await this.getAll()
        req.id = Math.max(...productos.map(obj => obj.id), 0) + 1
        req.ts = new Date()
        productos.push(req)
        await this.write(productos)
        return productos
    };
    async getAll(ruta){
        try {
            const productos = await fs.readFile(this.dataource)             
            return JSON.parse(productos)
        } catch (error) {
            return []
        }
    };
    async write(productos){
        console.log(this);
        try {            
            await fs.writeFile( this.dataource, JSON.stringify(productos,null,2),'utf-8' )
        } catch (error){
            console.log(error)
        }
    }
    async getById(req){
        try {
            const productos = await this.getAll()
            const item = productos.find( item => item.id === parseInt(req.params.id))
            if (!item) {
               return {"mensaje" : "producto no encotrado"}
            } else {
                return item
            }
        } catch (error) {
            return error
        }
    }
    async editById(req, res){
        const productos = await this.getAll()
        const index = productos.findIndex(( item => item.id === parseInt(res.params.id) ))

        productos[index].nombre = req.body.nombre
        productos[index].descripcion = req.body.descripcion
        productos[index].precio = req.body.precio
        productos[index].foto = req.body.foto
        productos[index].codigo = req.body.codigo
        productos[index].stock = req.body.stock
        productos[index].precio = req.body.precio

        await this.write(productos)
        return productos[index]
    }

    async deleteById(req){
        const productos = await this.getAll()
        await this.write( productos.filter( item => { return item.id !== parseInt(req.params.id)} ))
    };
    async deleteAll(){
        await fs.writeFile( this.dataource, '', function(){console.log('done')} )
    }
}

export default ContenedorArchivo;
