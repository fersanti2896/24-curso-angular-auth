/* Todas las rutas que van a tener que ver con autenticación */
const { Router } = require('express');

const router = Router();

/* Para crear un usuario */
router.post('/new', ( req, res ) => {
    return res.json({
        ok: true,
        msg: 'Crear usuario /new'
    });
});

/* Login de usuario */
router.post('/', ( req, res ) => {
    return res.json({
        ok: true,
        msg: 'Login de usuario /'
    });
});

/* Validando y revalidando token */
router.get('/renew', ( req, res ) => {
    return res.json({
        ok: true,
        msg: 'Renew'
    });
})

module.exports = router