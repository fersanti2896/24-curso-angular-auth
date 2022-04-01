/* Todas las rutas que van a tener que ver con autenticación */
const { Router } = require('express');
const { crearUsuario, loginUsuario, validarToken } = require('../controllers/auth');

const router = Router();

/* Para crear un usuario */
router.post('/new', crearUsuario);

/* Login de usuario */
router.post('/', loginUsuario);

/* Validando y revalidando token */
router.get('/renew', validarToken);

module.exports = router