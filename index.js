
const express = require('express');

/* Creando el Servidor/Aplicacion de Express */
const app = express();

/* Configurando las rutas */
app.use( '/api/auth', require('./routes/auth') );

/* Escucha el puerto donde saldrá */
app.listen( 4000, () => {
    console.log(`Servidor corriendo en localhost:${4000}`);
});