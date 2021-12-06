import { MongoClient } from 'mongodb'

class ContenedorMongoDb {

    constructor() {
        //super('')
    }
    

}

const uri = "mongodb+srv://coderhouse:<password>@cluster0.wduji.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


export default ContenedorMongoDb;

/* 
module.exports = function Cart(cart) {
    
    this.id = cart.id || 0;
    this.timestamp = cart.timestamp || 0;
    this.producto = cart.items || {};

    this.add = function(item, id) {
        let cartItem = this.producto[id];
        if (!cartItem) {
            cartItem = this.producto[id] = item 
        }
    };

    this.removeItem = function(id_prod) {
        console.log("-----------------------------");
        console.log(this.id)
        console.log(this.producto[id_prod]);
        delete this.producto[id_prod];
    };
    
    this.getItems = function() {
        let arr = [];
        for (var id in this.producto) {
            arr.push(this.producto[id]);
        }
        return arr;
    };
};
 */