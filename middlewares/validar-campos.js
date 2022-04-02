const { response } = require("express");
const { validationResult } = require("express-validator");

/* Valida que cuando se manden el POST se manden los request */
const validarCampos = (req, res = response, next) => {
    const errors = validationResult( req );

    if( !errors.isEmpty() ) {
        return res.status(400).json({
            ok    : false,
            errors: errors.mapped()
        })
    }

    /* Si no encuentra error, deja que siga ejecutando */
    next();
}

module.exports = {
    validarCampos
}