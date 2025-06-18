import express from 'express'
const router = express.Router()
import controller from '../controllers/students'

const studentController = new controller()

router.get('/', studentController.getAll)

router.post('/', studentController.create)

router.route('/:id')
    .get(studentController.get)
    .put(studentController.update)
    .delete(studentController.delete)

export default router