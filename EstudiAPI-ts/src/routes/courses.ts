import express from 'express'
const router = express.Router()
const controller = require('../controllers/courses')

router.get('/', controller.getAll)

router.post('/', controller.create)

router.route('/:id')
    .get(controller.get)
    .put(controller.update)
    .delete(controller.delete)

export default router