const { Router } = require('express');
const Container = require("../controller/contenedor")
const routerHome = Router();

const source = new Container('./src/data/productos.json');

/* ------------------------------------------------------ */
/* Login */
routerHome.get('/', async (req, res) => {
    let sess = req.session
    if(sess.username) {       
        res.render('home', { items : await source.getAll() });      
    } else {
        res.render('login')
    } 
});

routerHome.post('/login',(req, res) => {   
    req.session.username = req.body.username;
    res.redirect('/')
});


exports.routerHome = routerHome;