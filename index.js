const express = require('express');
// requerido para uso de ambientes
require('dotenv').config();
const cors = require('cors');
const { dbConnect } = require('./databases/config'); 

//servidor de express
const app = express();

// Base de Datos
dbConnect();

//CORS
app.use(cors());

//Directorios Publicos
app.use( express.static('public'));

// Parseo
app.use( express.json());

//Rutas
app.use('/api', require('./routes/auth'));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})