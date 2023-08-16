const path = require ('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/UnaCopadeCafe', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    image: String
});

const Product = mongoose.model('Product', productSchema);

// Crear un producto
app.post('/products', async (req, res) => {
    const newProduct = req.body;
    try {
        const product = await Product.create(newProduct);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el producto' });
    }
});

// Listar todos los productos
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
});

// Ver el detalle de un producto
app.get('/products/:id', async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await Product.findById(productId);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el producto' });
    }
});

// Actualizar un producto
app.put('/products/:id', async (req, res) => {
    const productId = req.params.id;
    const updatedProduct = req.body;
    try {
        const product = await Product.findByIdAndUpdate(productId, updatedProduct, { new: true });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el producto' });
    }
});



app.listen(3000,() => console.log ('servidor corriendo en puerto http://localhost:3000'));
