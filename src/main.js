const express = require('express')
const { routerProductos } = require("./router/productos")
const { routerCarrito } = require("./router/carrito")

const PORT = process.env.PORT || 8080
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//app.use(express.static('public'))

/* ------------------------------------------------------ */
/* Cargo los routers */
app.use('/api/productos', routerProductos)
app.use('/api/carrito', routerCarrito)

/* ------------------------------------------------------ */
/* Server Start */
const server = app.listen(PORT, "0.0.0.0", () => {
    console.log(`listen ${server.address().address}:${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))