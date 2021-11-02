const fs = require('fs');

class Container{
    constructor(dataource){
        this.dataource = dataource;
    }
    async save(req){        
        const productos = await this.getAll()
        req.id = Math.max(...productos.map(obj => obj.id), 0) + 1
        req.ts = new Date()
        productos.push(req)
        await this.write(productos)
        return productos
    };
    async getAll(dataource){
        try {
            const productos = await fs.promises.readFile(this.dataource)             
            return JSON.parse(productos)
        } catch (error) {
            return []
        }
    };
    async write(productos){
        try {            
            await fs.promises.writeFile( this.dataource, JSON.stringify(productos,null,2),'utf-8' )
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
        productos[index].title = req.body.title
        productos[index].price = req.body.price
        productos[index].thumbnail = req.body.thumbnail
        await this.write(productos)
        return productos[index]
    }

    async deleteById(req){
        const productos = await this.getAll()
        await this.write( productos.filter( item => { return item.id !== parseInt(req.params.id)} ))
    };
    async deleteAll(){
        await fs.promises.writeFile( this.dataource, '', function(){console.log('done')} )
    }
}

module.exports = Container;