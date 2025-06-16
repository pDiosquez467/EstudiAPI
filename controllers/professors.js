const db = require('../database/connection')

class ProfessorController {
    constructor() {

    }

    async getAll(req, res) {
        try {
            const [result] = await db.query(`SELECT * FROM professors;`)
            res.status(200).json(result)
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }

    create(req, res) {
        res.json( {msg: "CREATE professor"} )
    }

    get(req, res) {
        const { id } = req.params
        res.json( {msg: `GET professor by ID: ${id}`} )
    }

    update(req, res) {
        const { id } = req.params
        res.json( {msg: `UPDATE professor by ID: ${id}`} )
    }

    delete(req, res) {
        const { id } = req.params
        res.json( {msg: `DELETE professor by ID: ${id}`} )
    }

}

module.exports = new ProfessorController()