const jwt = require('jsonwebtoken');

/* Creacion y Verificación de JWT */
const generarJWT = ( uid, name ) => {
    const payload = { uid, name };

    return new Promise( (resolve, reject) => {
        jwt.sign( payload, process.env.SECRET_JWT_SEED, {
                expiresIn: '24h' 
            }, (err, token) => {
                (err) ? reject( err ) 
                      : resolve( token );
            } );
    });    
}

module.exports = {
    generarJWT  
}