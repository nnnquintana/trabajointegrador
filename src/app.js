const path = require ('path');
const express = require('express');
const app = express();
const products = require ('./routes/products');
const loggerMiddleware = require ('./middlewares/loggerMiddleware');

app.use (express.static(path.resolve (__dirname, '../public')));
app.use (express.urlencoded ({extended:false}));
app.use (express.json ());

app.use ('/products', products);
app.use ('/detalle/:id', products);
app.use (loggerMiddleware);

app.use (function(req,res,next){
    return res.status(404).json ({
        status:404,
        error: 'Resource not found',
        menssage: 'Error en el recurso solicitado'
    })});

app.listen(3000,() => console.log ('servidor corriendo en puerto http://localhost:3000'));
