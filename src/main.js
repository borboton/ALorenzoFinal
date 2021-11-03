const express = require('express')
const session = require('express-session');
const pug = require('pug');

const { Server: HttpServer } = require('http');
const { Server: IOServer, Socket } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const { routerProductos } = require("./router/productos")
const { routerCarrito } = require("./router/carrito")
const { routerHome } = require("./router/home")

const PORT = process.env.PORT || 8080
// const app = express()

// PUG
app.set('views', './views');
app.set('view engine', 'pug');

/* ------------------------------------------------------ */
/* Express session */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({secret: 'secret1234',saveUninitialized: true,resave: true}));
app.use(express.static('public'))

/* ------------------------------------------------------ */
/* Routers */
app.use('/', routerHome)
app.use('/api/productos', routerProductos)
app.use('/api/carrito', routerCarrito)

/* Server Start */

const server = httpServer.listen(PORT, "0.0.0.0", () => {
    console.log(`listen ${httpServer.address().address}:${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))