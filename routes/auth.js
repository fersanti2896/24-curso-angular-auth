/* Todas las rutas que van a tener que ver con autenticación */
const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, validarToken } = require('../controllers/auth');

const router = Router();

/* Para crear un usuario */
router.post('/new', [
    /* Middlewer para validar campos */
    check('name', 'El nombre es requerido!').not().isEmpty(),
    check('email', 'El correo es requerido!').isEmail(),
    check('password', 'La contraseña es requerido!').isLength({ min: 6 })
], crearUsuario);

/* Login de usuario */
router.post('/', [
    /* Middlewers la cual es una función normal */
    check('email', 'El correo es obligatorio!').isEmail(),
    check('password', 'La contraseña es obligatoria!').isLength({ min: 6 })
], loginUsuario);

/* Validando y revalidando token */
router.get('/renew', validarToken);

module.exports = router