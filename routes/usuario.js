const { Router } = require('express');
const { usuriosGet, usuriosPut, usuriosPost, usuriosDelete } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuriosGet);
router.put('/:id', usuriosPut);
router.post('/', usuriosPost);
router.delete('/', usuriosDelete);

module.exports = router;