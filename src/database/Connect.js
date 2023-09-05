const mongoose = require('mongoose');

const connectDB = async() => {
try {
   await mongoose.connect ('mongodb://localhost:27017/UnaCopaDeCafe',{
      useNewUrlParser: true,
      useUnifiedTopology: true,
   });
   console.log ('conectado a la base de datos');
   } catch (error) {
      console.error ('Error al conectar a la base de datos', error);
   }
};

module.exports = { connectDB, mongooseConnection: mongoose.connection };