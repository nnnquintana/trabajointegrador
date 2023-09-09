const Product = require('../database/models/Product');

const controller = {
crear: async (req,res) => {

 try {
    let product = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: req.file.filename,
    };

   const productDatabase = await Product.create (product);

   res.status (201).json(productDatabase);
 } catch (error) {
    console.error(error);

    return res.status(500).json ({message: 'Error interno del servidor'});
 }
},


listar: async (req,res) => {
try {
    const products = await Product.find({});
res.status (200).json (products);
} catch (error) {
    console.error (error);
    res.status (500).json ({message:'Erro interno del servidor'});
}
},

detalle: async (req,res) => {
let id = +req.params.id;
try {
    const product = await Product.findById(id);
    if (!product){
        return res.status(404).json ({message:'Producto no encontrado'});
    }
    res.status (200).json (product);
    } catch (error){
        console.log(error);
        res.status (500).json ({message:'Internal server error'});
    }
},
};


module.exports = controller;
