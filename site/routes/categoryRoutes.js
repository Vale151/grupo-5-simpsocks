const express = require('express');
const router = express.Router();
const controller = require('../controllers/categoryController');
const adminRoute = require('../middlewares/adminRoute');
const validate = require('../validators/categories-validator');
const upload = require('../tools/uploader')('categories');

router.use(adminRoute);

// Listado de usuarios
router.get('/', controller.list);

// Formulario de creación de categorías
router.get('/create', controller.create);
// Acción de creación
router.post('/', upload.single('image'), validate.createForm, controller.store);

// Formulario de edición de categorías
router.get('/:id/edit', controller.edit);
// Acción de edición
router.put('/:id', upload.single('image'), validate.editForm, controller.update);
// Acción de borrado
router.delete('/:id', controller.destroy);

// Detalle de una categoría
router.get('/:id', controller.detail);

module.exports = router;