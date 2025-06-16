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


    async update(req, res) {
        const { id } = req.params;
        const { first_name, last_name, email } = req.body;

        const fields = []
        const values = []

        if (first_name !== undefined) {
            fields.push('first_name = ?')
            values.push(first_name)
        }

        if (last_name !== undefined) {
            fields.push('last_name = ?')
            values.push(last_name)
        }

        if (email !== undefined) {
            fields.push('email = ?')
            values.push(email)
        }

        if (fields.length === 0) {
            return res.status(400).json({ msg: 'No fields to update' });
        }

        values.push(id)

        try {
            const [result] = await db.query(
                `UPDATE students SET ${fields.join(', ')} WHERE id = ?`,
            values
            );

            if (result.affectedRows === 0) {
                return res.status(404).json({ msg: `No student found with ID: ${id}` });
            }

            res.status(200).json({ msg: `Student with ID ${id} updated successfully` });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
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