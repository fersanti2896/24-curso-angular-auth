
/* Haciendo tipado */
const { response } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

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
        dbUser = new Usuario( req.body );

        /* Encriptar - Hashear password */
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync( password, salt );

        /* Generando JWT para que se mande en Front como autenticación */
        const token = await generarJWT( dbUser.id, dbUser.name );

        /* Crear el usuario en la BD */
        await dbUser.save();

        /* Generando respuesta existosa al usuario */  
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name: name, 
            token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok : false,
            msg: 'Por favor hable con el administrador'
        });
    }  
}

const loginUsuario = async( req, res = response ) => {
    const { email, password } = req.body;

    try {
        /* Verificando si el email existe */
        const dbUser = await Usuario.findOne({ email: email })

        if( !dbUser ) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo no existe!'
            });
        }

        /* Verificando si la contraseña hace match con la BD */
        const validPassword = bcrypt.compareSync( password, dbUser.password );

        if( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'La contraseña no es válido!'
            });
        }

        /* Si hace match con el email y password, generamos el JWT */
        const token = await generarJWT( dbUser.id, dbUser.name );

        /* Respuesta del servicio */
        return res.json({
            ok: true, 
            uid: dbUser.id,
            name: dbUser.name, 
            token
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador!'
        });
    }
}

const validarToken = async( req, res = response) => {
    const { uid, name } = req;

    /* Generamos un nuevo JWT */
    const token = await generarJWT( uid, name );

    return res.json({
        ok : true,
        uid, 
        name, 
        token
    });
}

module.exports = {
    crearUsuario, 
    loginUsuario,
    validarToken
}