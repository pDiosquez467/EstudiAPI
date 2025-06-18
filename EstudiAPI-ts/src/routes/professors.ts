import express from 'express'
const router = express.Router()
import controller from '../controllers/professors'

const professorController = new controller()

router.get('/', professorController.getAll)

router.post('/', professorController.create)

router.route('/:id')
    .get(professorController.get)
    .put(professorController.update)
    .delete(professorController.delete)

export default router