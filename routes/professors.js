const express = require('express')
const router = express.Router()

const controller = require('../controllers/professors')

router.get('/', controller.getAll)

router.post('/', controller.create)

router.route('/:id')
    .get(controller.get)
    .put(controller.update)
    .delete(controller.delete)

module.exports = router