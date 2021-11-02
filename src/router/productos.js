const Container = require("../controller/contenedor")
const { Router } = require('express');

const source = new Container('./src/data/productos.json');
const routerProductos = Router();
const root = "admin"

function isAdmin(req, res, next) {
    const sess = req.session 
    console.log(sess);
    if ( sess.username === root ) {
      next();
    } else {      
      res.json({ "error": -1, "descripcion": req.baseUrl, "metodo" : req.method, "info": "No autorizado"})
    }
}

function isUser(req, res, next) {    
    const sess = req.session 
    if ( sess.username ) {
      next();
    } else {      
      res.json({ "error": -1, "descripcion": req.baseUrl, "metodo" : req.method, "info": "No autorizado"})
    }
}

routerProductos.get('/', [isUser], async (req, res) => {    
  res.json(await source.getAll())
});

routerProductos.get('/:id',[isUser], async (req, res) => {
    res.json(await source.getById(req))
});

routerProductos.post('/', [isAdmin], async (req, res) => {
    await source.save(req.body)
    return res.json({id : req.body.id})      
})

routerProductos.put('/:id', [isAdmin], async (req, res) => {    
    res.json( await source.editById(req, req) );
});

routerProductos.delete('/:id', [isAdmin], async (req, res) => {
    const alert = await source.deleteById(req)
});

exports.routerProductos = routerProductos;