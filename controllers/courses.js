const db = require('../database/connection')

class CourseController {
    constructor() {

    }

    async getAll(req, res) {
        try {
            const [result] = await db.query('SELECT * FROM courses;')
            res.status(200).json(result)
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async create(req, res) {
        const { name, description, professor_id } = req.body

        const [professor] = await db.query('SELECT * FROM professors WHERE id = ?;', 
            [professor_id])

        if (professor.length === 0) {
            return res.status(400).json({ error: `Professor with ID ${professor_id} does not exist` });
        }

        try {
            const [result] = await db.query(
                `INSERT INTO courses (name, description, professor_id)
                 VALUES (?, ?, ?);`, [name, description, professor_id])

            res.status(201).json({ id: result.insertId })
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    get(req, res) {
        const { id } = req.params
        res.json( {msg: `GET course by ID: ${id}`} )
    }

    update(req, res) {
        const { id } = req.params
        res.json( {msg: `UPDATE course by ID: ${id}`} )
    }

    delete(req, res) {
        const { id } = req.params
        res.json( {msg: `DELETE course by ID: ${id}`} )
    }

}

module.exports = new CourseController()