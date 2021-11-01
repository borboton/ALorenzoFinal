const { Router } = require('express');
const Container = require("../controller/contenedor")
const Cart = require('../controller/cart');
const source = new Container('data/productos.json');
const routerCarrito = Router();

const carts = []
let id = 0
// --------------- post ------------------------//
routerCarrito.post('/', (req, res) => {
    const newCart = { "id" : `${++id}`, "timestamp": new Date()} 
    const carrito = new Cart(newCart)
    carts.push(carrito)
    res.json(carts)
    console.log(carts);
    console.log("--------------------------------");
});

// --------------- post ------------------------//

routerCarrito.post('/:id/productos', async(req, res) => {
    const producto = await source.getById(req)
    console.log(producto);
    carts[0].add(producto, req.params.id)
    console.log("--------------------------------");
    res.json(carts)
});


// --------------- post ------------------------//

routerCarrito.get('/:id', (req, res) => {
    console.log(req.params.id)
    
    console.log(carts)
    console.log("--------------------------------");
    res.json(carts)
});


// --------------- delete ------------------------//
routerCarrito.delete('/:id/productos/:id_prod', (req, res) => {
    carts[req.params.id].removeItem(req.params.id_prod)
    console.log(req.params.id);
    res.json(carts)
});

// --------------- get ------------------------//
routerCarrito.get('/', (req, res) => {
    res.json(carts)
});


exports.routerCarrito = routerCarrito;

