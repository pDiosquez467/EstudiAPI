const db = require('../database/connection')

class StudentController {
    constructor() {

    }

    async getAll(req, res) {
        try {
            const [result] = await db.query(`SELECT * FROM students;`);
            res.status(200).json(result); 
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
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

    async get(req, res) {
    const { id } = req.params;
    try {
        const [result] = await db.query(
            `SELECT * FROM students WHERE id = ?;`,
            [id]  
        );

        if (result.length === 0) {
            return res.status(404).json({ msg: `No student found with ID ${id}` });
        }

        res.status(200).json(result[0]);  
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


    update(req, res) {
        const { id } = req.params
        res.json( {msg: `UPDATE student by ID: ${id}`} )
    }

    async delete(req, res) {
        const { id } = req.params
        
        try {
            const [result] = await db.query(`DELETE FROM students WHERE id=?`,
            [id])

            if (result.affectedRows === 0) {
                return res.status(404).json({ msg: `No student found with ID: ${id}` });
            }

            res.status(200).json({ msg: `Deleted student whit ID: ${id}` })
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

}

module.exports = new StudentController()