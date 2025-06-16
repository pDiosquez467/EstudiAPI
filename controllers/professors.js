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

    async create(req, res) {
        const { first_name, last_name, email, cellphone } = req.body

        try {
            const [result] = await db.query(
                `INSERT INTO professors (first_name, last_name, email, cellphone)
                VALUES (?, ?, ?, ?)`,
                [first_name, last_name, email, cellphone]
            )

            res.status(201).json({ id: result.insertId })
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }

    get(req, res) {
        const { id } = req.params
        res.json({ msg: `GET professor by ID: ${id}` })
    }

    update(req, res) {
        const { id } = req.params
        res.json({ msg: `UPDATE professor by ID: ${id}` })
    }

    delete(req, res) {
        const { id } = req.params
        res.json({ msg: `DELETE professor by ID: ${id}` })
    }

}

module.exports = new ProfessorController()