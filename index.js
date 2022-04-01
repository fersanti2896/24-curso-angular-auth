
const express = require('express');
const cors = require('cors');

/* Creando el Servidor/Aplicacion de Express */
const app = express();

/* CORS */
app.use( cors() );

/* Lectura y parseo (trnasformar) del body */
app.use( express.json() );

/* Configurando las rutas */
app.use( '/api/auth', require('./routes/auth') );

/* Escucha el puerto donde saldrá */
app.listen( 4000, () => {
    console.log(`Servidor corriendo en localhost:${4000}`);
});