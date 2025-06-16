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

    create(req, res) {
        res.json( {msg: "CREATE course"} )
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