import express from "express";
import dao from "../dao/daos.js";
const routerProductos = express.Router();

const dataAccessObject = new dao.ProductosDaoArchivos()
console.log(dataAccessObject)

/* const auth = function(req, res, next) {
  if (req.session && req.session.user === "root" && req.session.admin)
    return next();
  else
    return res.sendStatus(401);
}; */

function isAdmin(req, res, next) {
    const sess = req.session 
    console.log(sess);
    if ( sess.username === user ) {
      next();
    } else {      
      res.json({ "error": -1, "descripcion": req.baseUrl, "metodo" : req.method, "info": "No autorizado"})
    }
}

// --------------- get ------------------------//
routerProductos.get('/', async (req, res) => {    
  res.json(await source.getAll())
});

// --------------- get ------------------------//
routerProductos.get('/:id', async (req, res) => {
  res.json(await source.getById(req))
});

// --------------- post ------------------------//
routerProductos.post('/', async (req, res) => {
  await source.save(req.body)
  res.json({id : req.body.id})
})

// --------------- put ------------------------//
routerProductos.put('/:id', async (req, res) => {    
  res.json( await source.editById(req, req) );
});

// --------------- delete ------------------------//
routerProductos.delete('/:id', async (req, res) => {
    const alert = await source.deleteById(req)
});


export default routerProductos;