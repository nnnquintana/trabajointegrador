const mongoose = require('mongoose');

module.exports = async () => {
try {
   await mongoose.connect ('mongodb://localhost:27017/UnaCopaDeCafe',{
      userNewUrlParser: true,
      userUnifiedTopology: true,
   });
   console.log ('conectado a la base de datos');
   } catch (error) {
      console.error ('Error al conectar a la base de datos', error);
   }
};