const Container = require("../controller/contenedor")
const { Router } = require('express');

const source = new Container('data/productos.json');
const routerProductos = Router();

function isAdmin(req, res, next) {
    if (req.headers.isadmin) {
      next();
    } else {      
      res.json({ "error": -1, "descripcion": req.baseUrl, "metodo" : req.method})
    }
}

routerProductos.get('/', async(req, res) => {
    res.json(await source.getAll())
});

routerProductos.get('/:id', async (req, res) => {        
    res.json(await source.getById(req))
});

routerProductos.post('/', [isAdmin], async (req, res) => {
    res.json(await source.save(req.body))
});

routerProductos.put('/:id', [isAdmin], async (req, res) => {    
    res.json( await source.editById(req, req) );
});

routerProductos.delete('/:id', [isAdmin], async (req, res) => {
    const alert = await source.deleteById(req)
    res.json(alert);
});

exports.routerProductos = routerProductos;