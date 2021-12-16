import express from "express" ;
import session from "express-session";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
//import pug from "pug";

const app = express()
const httpserver = new createServer(app)
const io = new Server(httpserver)

import routerCarrito from "./router/carrito.js";
import routerProductos from "./router/productos.js";
import routerHome from "./router/home.js";

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
app.use('/', routerHome)
app.use('/api/productos', routerProductos)
app.use('/api/carrito', routerCarrito)

/* Server Start */
console.log("# export persistencia=memoria|archivo|firebase|mongodb ");
console.log(`Persistencia env : ${process.env.persistencia}`)
const PORT = process.env.PORT || 8080

const httpd = httpserver.listen(8080, "0.0.0.0", function () {
    console.log(`Servidor Http con Websockets escuchando en el puerto ${this.address().port}`)
})
httpd.on('error', error => console.log(`Error en servidor ${error}`))
