
/* Haciendo tipado */
const { response } = require('express');

/* Controladores de rutas */
const crearUsuario = ( req, res = response ) => {
    const { name, email, password } = req.body;

    return res.json({
        ok : true,
        msg: 'Crear usuario /new'
    });
}

const loginUsuario = ( req, res = response ) => {
    const { email, password } = req.body;

    return res.json({
        ok : true,
        msg: 'Login de usuario /'
    });
}

const validarToken = ( req, res = response) => {
    return res.json({
        ok : true,
        msg: 'Renew'
    });
}

module.exports = {
    crearUsuario, 
    loginUsuario,
    validarToken
}