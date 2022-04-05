
const express = require('express');
const cors = require('cors');
const path = require('path');
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

/* Manejar las demas rutas */
app.get( '*', ( req, res ) => {
    res.sendFile( path.resolve( __dirname, 'public/index.html' ) );
} )

/* Escucha el puerto donde saldrá */
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en localhost:${process.env.PORT}`);
});