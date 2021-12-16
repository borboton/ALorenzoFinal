//import { MongoClient } from "mongodb";
import  mongoose from "mongoose";
import config from "../../config.js"


class ContenedorMongoDb {
    constructor( collection, schema ) {
        this.collection = mongoose.model(collection, schema)
    }
    async connect(){
        mongoose.connect(config.mongodb.uri)
        mongoose.connection.on("open", ()=>{
            console.log("Mongo connected")
        })
        mongoose.connection.on("error", ()=>{
            console.log("Error connected Mongo")
        })
    }
    
    async disconnect(){
        await mongoose.disconnect()
        console.log('Mongo disconnect')    
    }
    
    async save(req){
        await this.connect()        
        const productos = await this.collection.find()
        req.id = Math.max(...productos.map(obj => obj.id), 0) + 1;
        req.ts = new Date()
        this.collection.create(req)
    };

    async getAll(ruta){
        await this.connect()
        const productos = await this.collection.find({},{_id: 0, _v: 0 })
        return productos        
    };
    async write(productos){
        
    };
    async getById(req){
        await this.connect()
        const items = await this.collection.find({id: req.params.id}, {_id: 0, _v : 0} )
        if (items == '') {            
            return ({ error : 'producto no encontrado' })
        } else {            
            return items
        }        
    };
    async editById(req){
        await this.connect()        
        await this.collection.updateMany({id: req.params.id}, 
            {$set: {
                "nombre": req.body.nombre,
                "precio": req.body.precio,
                "foto": req.body.foto,
                "codigo": req.body.codigo,
                "descripcion": req.body.descripcion,
                "stock": req.body.stock
            } }
        )        
    };
    
    async deleteById(req){     
        await this.connect()
        const res = await this.collection.deleteMany({id: req.params.id})
        await this.disconnect()
        return res
    };
    
    async deleteAll(){     
        await this.connect()
        await this.collection.deleteAll()
        await this.disconnect()        
    };

}
export default ContenedorMongoDb;