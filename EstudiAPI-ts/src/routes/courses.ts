import express from 'express'
const router = express.Router()
import controller from'../controllers/courses'

const courseController = new controller()

router.get('/', courseController.getAll)

router.post('/', courseController.create)

router.route('/:id')
    .get(courseController.get)
    .put(courseController.update)
    .delete(courseController.delete)

export default router