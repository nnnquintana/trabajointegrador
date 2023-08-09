const fs = require ('fs');
const path = require ('path');h

const rutaJSON = path.resolve (__dirname, '../data/products.json');
const dataJSON = fs.readFileSync (rutaJSON, {encoding:'utf8' });
let products = JSON.parse (dataJSON);

const controller = {

crear: function (req,res) {
const {name, price, description, image } = req.body;
if (!name || !price || !description) {
return res.status (400).json ({menssage: 'Por favor, proporcione todos los campos requeridos.'});
}

const nuevoProducto = {
    id: products.length + 1,
    name,
    price,
    description,
    image,
};

products.push (nuevoProducto);

let productsJson =JSON.stringify(products, null, 4);

fs.writeFileSync(rutaJSON, productsJson, { encoding: 'utf8' });

res.status (201).json(nuevoProducto);
},

listar: function (req,res) {
const {name} = req.params;

if (name) {
const productosFiltrados = products.filter (producto => producto.name.tolowerCase ().includes (name.tolowerCase()));
res.json (productosFiltrados);
}else {
res.json(products);}
},

detalle: function (req,res) {
let id = +req.params.id;
let products = products.find (product => product.id ==id);
res.json (product);}
}

module.exports = controller;
