//import { MongoClient } from "mongodb";
import  mongoose from "mongoose";
import config from "../../config.js"

const main = ()=>{
    mongoose.connect(config.mongodb.uri)
    mongoose.connection.on("open", ()=>{
        console.log("Base de datos conectada con exito!!")
    })
    mongoose.connection.on("error", ()=>{
        console.log("Error al conectarse a la base de datos!!")
    })
}
main();

class ContenedorMongoDb {
    constructor( collection, schema ) {
        this.collection = mongoose.model(collection, schema)
    }
    async save(req){        
        const productos = await this.collection.find()
        req.id = Math.max(...productos.map(obj => obj.id), 0) + 1
        req.ts = new Date()
        this.collection.create(req)    
    };

    async getAll(ruta){
        const productos = await this.collection.find()
        return productos
    };
    async write(productos){
    };
    async getById(req){
    };
    async editById(req, res){
    };
    async deleteById(req){     
    };
    async deleteAll(){     
    };

}
export default ContenedorMongoDb;