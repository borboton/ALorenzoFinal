import admin from 'firebase-admin';
import config from '../../config.js'

admin.initializeApp({
    credential: admin.credential.cert(config.firebase)
})

const db = admin.firestore();
console.log("Firebase connected")
    
class ContenedorFirebase {
    constructor(collection) {
        this.collection = collection
    }

    async save(req){       
        const productos = db.collection(this.collection).doc()
        const id = productos.id
        await productos.set(req)
        return { "id" : id }
    };

    async getAll(ruta){
        const productos = db.collection(this.collection)
        const snapshot = await productos.get();
        return snapshot.docs.map(doc => doc.data());        
    };
    
    async write(productos){        
    };
    
    async getById(req){
        const item = await db.collection(this.collection).doc(req.params.id).get()
        if (item == '') {
            console.log(item)            
            return ({ error : 'producto no encontrado' })
        } else {            
            return item._fieldsProto            
        }        
    };
    
    async editById(req, res){
        var productos = db.collection(this.collection);
        var query = productos.where("id = = req.params.id").get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    console.log(doc.id, '=>', doc.data());
                    var deleteDoc = db.collection(this.collection).doc(doc.id).delete();
            });
        })
        .catch(err => {
        console.log('Error getting documents', err);
        });
    
    };
    
    async deleteById(req){     
        const res = await db.collection(this.collection).doc(req.params.id).delete();
        console.log(res);
        return res
    };
    
    async deleteAll(){     
    
    };

}
export default ContenedorFirebase;