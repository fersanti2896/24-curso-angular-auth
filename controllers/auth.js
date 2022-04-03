
/* Haciendo tipado */
const { response } = require('express');
const Usuario = require('../models/Usuario');

/* Controladores de rutas */
const crearUsuario = async( req, res = response ) => {
    const { name, email, password } = req.body;

    try {
        /* Verificar si no existe un email igual */
        const usuario = await Usuario.findOne({ email: email });

        if( usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya hay un usuario con este email'
            });
        }

        /* Crear el usuario con el modelo */
        dbUser = new Usuario(req.body);

        /* Encriptar - Hashear password */
        /* Generando JWT para que se mande en Front como autenticación */
        
        /* Crear el usuario en la BD */
        await dbUser.save();

        /* Generando respuesta existosa al usuario */  
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name: name
        });

    } catch (error) {}
        console.log(error)
        return res.status(500).json({
            ok : false,
            msg: 'Por favor hable con el administrador'
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