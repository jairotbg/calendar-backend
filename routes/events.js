/*
    ? Rutas de Eventos /Events
    ? host + /api/events
*/


const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/eventsController');

const router = Router();

router.use( validarJWT );

//? Obtener eventos
router.get('/', getEventos);

//? Crear un nuevo evento
router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'La Fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'La Fecha de finalización es obligatoria').custom( isDate ),
        // check('start', 'La Fecha de inicio es obligatoria').isDate(),
        validarCampos
    ],
    crearEvento
);

//? Actualizar evento
router.put(
    '/:id', 
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'La Fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'La Fecha de finalización es obligatoria').custom( isDate ),
        // check('start', 'La Fecha de inicio es obligatoria').isDate(),
        validarCampos
    ],
    actualizarEvento);

//? Eliminar evento
router.delete('/:id', eliminarEvento);


module.exports = router;