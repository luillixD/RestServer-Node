const { Router } = require('express');
const { check } = require('express-validator');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete } = require('../controllers/usuarios');
const { validarCampos } = require('../midelwares/validar-campos');
const { rolValido, existeEmail, existeUsuarioID } = require('../helpers/db-validators');

const router = Router();

router.get('/', usuariosGet);
router.put('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioID),
    check('rol').custom(rolValido),
    validarCampos
], usuariosPut);
router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio y mas de 6 letras').not().isEmpty().isLength({ min: 6 }),
    check('correo', 'El correo no es valido').isEmail(),
    check('correo').custom(existeEmail),
    // check('rol', 'No es un rol permitido').isIn(['ADMIN_ROL', 'USER_ROLE']),
    // check('rol').custom((rol) =>rolValido(rol)),Es asi solo que como se llma 2 veces role se toma por implicito que esol va ahi 2 vces
    check('rol').custom(rolValido),
    validarCampos
], usuariosPost);
router.delete('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioID),
    validarCampos
], usuariosDelete);

module.exports = router;