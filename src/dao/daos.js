const persistencia = process.env.persistencia || "archivo"

let productosDao
let carritoDao 

switch (persistencia) {
    case 'firebase':
        const { default: ProductosDaoFirebase } = await import('./productos/ProductosDaoFirebase.js')
        const { default: CarritosDaoFirebase } = await import('./carrito/CarritoDaoFirebase.js')
        productosDao = new ProductosDaoFirebase()
        carritoDao = new CarritosDaoFirebase()
        break
    case 'mongodb':
        const { default: ProductosDaoMongoDb } = await import('./productos/ProductosDaoMongoDb.js')
        const { default: CarritosDaoMongoDb } = await import('./carrito/CarritoDaoMongoDb.js')
        productosDao = new ProductosDaoMongoDb()
       // carritoDao = new CarritosDaoMongoDb()
        break
    case 'archivo':
        const { default: ProductosDaoArchivos } = await import('./productos/ProductosDaoArchivos.js')
        const { default: CarritoDaoArchivo } = await import('./carrito/CarritoDaoArchivo.js')
        productosDao = new ProductosDaoArchivos()
        carritoDao = new CarritoDaoArchivo()
        break
    case 'memoria':        
        const { default: ProductosDaoMemoria } = await import('./productos/ProductosDaoMemoria.js')
        const { default: CarritoDaoMemoria } = await import('./carrito/CarritoDaoMemoria.js')
        productosDao = new ProductosDaoMemoria()
        carritoDao = new CarritoDaoMemoria()
        break
}

export { productosDao, carritoDao }