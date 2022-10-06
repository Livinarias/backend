/* host + /api */

const router = require('express').Router();
const { check } = require('express-validator');
const { CreateNote } = require('../controllers/create_note');
const { ViewNotes } = require('../controllers/view_note');
const { EditNote } = require('../controllers/edit_note');
const { DeleteNote } = require('../controllers/delete_note');
const { validateFields } = require('../middlewares/validate-fields');

router.post(
    '/new',
    [
        check('name', 'El nombre es obligatorio').notEmpty(),
        check('title', 'El titulo es obligatorio').notEmpty(),
        check('description', 'La descripción es obligatoria').notEmpty(),
        check('age', 'La edad es obligatoria').notEmpty(),
        check('name', 'El nombre debe ser de mínimo 6 caracteres').isLength({ min: 6}),
        check('title', 'El titulo debe ser de mínimo 6 caracteres').isLength({ min: 6}),
        check('description', 'La descripción debe ser de mínimo 6 caracteres').isLength({ min: 6}),
        validateFields,
    ],
    CreateNote );

router.put(
        '/edit-note',
        [
            check('name', 'El nombre es obligatorio').notEmpty(),
            check('title', 'El titulo es obligatorio').notEmpty(),
            check('description', 'La descripción es obligatoria').notEmpty(),
            check('age', 'La edad es obligatoria').notEmpty(),
            check('name', 'El nombre debe ser de mínimo 6 caracteres').isLength({ min: 6}),
            check('title', 'El titulo debe ser de mínimo 6 caracteres').isLength({ min: 6}),
            check('description', 'La descripción debe ser de mínimo 6 caracteres').isLength({ min: 6}),
            validateFields,
        ],
        EditNote );

router.delete(
        '/delete-note',
        [
            check('title', 'El titulo es obligatorio').notEmpty(),
            check('title', 'El titulo debe ser de mínimo 6 caracteres').isLength({ min: 6}),
            validateFields,
        ],
        DeleteNote );

router.get('/notes', ViewNotes );

module.exports = router;