
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
require('dotenv').config();

/* Creando el Servidor/Aplicacion de Express */
const app = express();

/* Conexion a Base de Datos */
dbConnection();

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