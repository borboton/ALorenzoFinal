import express from "express" ;
import session from "express-session";
//import pug from "pug";
//import HttpServer from "http";
//import { IOServer, Socket } from "socket.io";

const app = express()
//const httpserver = new HttpServer(app)
//const io = new IOServer(httpServer)

import routerCarrito from "./router/carrito.js";
import routerProductos from "./router/productos.js";
import routerHome from "./router/home.js";

const PORT = process.env.PORT || 8080
// PUG
app.set('views', './views');
app.set('view engine', 'pug');

/* ------------------------------------------------------ */
/* Express session */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({ secret: 'secret1234', saveUninitialized: true, resave: true }));
app.use(express.static('public'))

/* ------------------------------------------------------ */
/* Routers */
//app.use('/', routerHome)
app.use('/api/productos', routerProductos)
app.use('/api/carrito', routerCarrito)

/* Server Start */

const server = app.listen(PORT, ()=> {
    console.log("Listen server");
})
/* 
const server = httpserver.listen(PORT, "0.0.0.0", () => {
    console.log(`listen ${httpserver.address().address}:${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`)) 
*/