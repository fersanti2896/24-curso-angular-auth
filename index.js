
const express = require('express');
const cors = require('cors');
require('dotenv').config();

/* Creando el Servidor/Aplicacion de Express */
const app = express();

/* Directorio Público */
app.use( express.static('public') );

/* CORS */
app.use( cors() );

/* Lectura y parseo (trnasformar) del body */
app.use( express.json() );

/* Configurando las rutas */
app.use( '/api/auth', require('./routes/auth') );

/* Escucha el puerto donde saldrá */
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en localhost:${process.env.PORT}`);
});