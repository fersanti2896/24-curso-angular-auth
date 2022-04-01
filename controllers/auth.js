
/* Haciendo tipado */
const { response } = require('express');
const { validationResult } = require('express-validator');

/* Controladores de rutas */
const crearUsuario = ( req, res = response ) => {
    const errors = validationResult( req );

    if( !errors.isEmpty() ) {
        return res.status(400).json({
            ok    : false,
            errors: errors.mapped()
        })
    }

    const { name, email, password } = req.body;
    console.log(name, email, password);

    return res.json({
        ok : true,
        msg: 'Crear usuario /new'
    });
}

const loginUsuario = ( req, res = response ) => {
    const errors = validationResult( req );
    
    if( !errors.isEmpty() ) {
        return res.status(400).json({
            ok    : false,
            errors: errors.mapped()
        });
    }

    const { email, password } = req.body;
    console.log(email, password);

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