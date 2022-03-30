
const express = require('express');

/* Creando el Servidor/Aplicacion de Express */
const app = express();

/* Peticion GET */
app.get('/', ( req, res ) => {
    res.json({
        ok: true,
        msg: 'Todo salió bien',
        uid: 1234
    });
});

/* Escucha el puerto donde saldrá */
app.listen( 4000, () => {
    console.log(`Servidor corriendo en localhost:${4000}`);
});