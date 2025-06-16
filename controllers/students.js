const db = require('../database/connection')

class StudentController {
    constructor() {

    }

    getAll(req, res) {
        res.json( {msg: "GET all students"} )
    }

    async create(req, res) {
        const { license, first_name, last_name, email } = req.body;

        try {
            const [result] = await db.query(
                `INSERT INTO students (license, first_name, last_name, email) 
                VALUES (?, ?, ?, ?)`,
                [license, first_name, last_name, email]
            );

            res.status(201).json({ id: result.insertId });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    get(req, res) {
        const { id } = req.params
        res.json( {msg: `GET student by ID: ${id}`} )
    }

    update(req, res) {
        const { id } = req.params
        res.json( {msg: `UPDATE student by ID: ${id}`} )
    }

    delete(req, res) {
        const { id } = req.params
        res.json( {msg: `DELETE student by ID: ${id}`} )
    }

}

module.exports = new StudentController()