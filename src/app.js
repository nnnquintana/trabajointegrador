const path = require ('path');
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productsRoutes = require ('./routes/products');
const {connectDB, mongooseConnection } = require ('./database/Connect');

const app = express();
const port = process.env.PORT || 3000;

mongooseConnection.on ('error', (err)=> {
    console.error ('Error de conexion ala base de datos:', err);});

mongooseConnection.once ('open', () => { 
    console.log ('Conexion exitosa a la base de datos');
});

app.use(bodyParser.json());

const storage = multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, path.join(__dirname, 'public/images')); 
        },
        filename: (req, file, cb) => {
          const ext = path.extname(file.originalname);
          cb(null, Date.now() + ext); 
        },
      });
      
const upload = multer({ storage });

app.use ('/products', productsRoutes);


app.post('/upload', upload.single('image'), (req, res) => {
    res.status(200).json({ message: 'Imagen subida correctamente' });
});



app.listen(3000, () => console.log('Servidor corriendo en puerto http://localhost:3000'));


connectDB().catch((error) => {
    console.error('Error al conectar a la base de datos', error);
});
