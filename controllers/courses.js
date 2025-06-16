const db = require('../database/connection')

class CourseController {
  constructor() {}

  async getAll(req, res) {
    try {
      const [result] = await db.query('SELECT * FROM courses')
      res.status(200).json(result)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async create(req, res) {
    const { name, description, professor_id } = req.body

    try {
      const [professor] = await db.query(
        'SELECT * FROM professors WHERE id = ?',
        [professor_id]
      )

      if (professor.length === 0) {
        return res.status(400).json({ error: `Professor with ID ${professor_id} does not exist` })
      }

      const [result] = await db.query(
        `INSERT INTO courses (name, description, professor_id)
         VALUES (?, ?, ?)`,
        [name, description, professor_id]
      )

      res.status(201).json({ id: result.insertId })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async get(req, res) {
    const { id } = req.params

    try {
      const [result] = await db.query(
        'SELECT * FROM courses WHERE id = ?',
        [id]
      )

      if (result.length === 0) {
        return res.status(404).json({ msg: `No course found with ID ${id}` })
      }

      res.status(200).json(result[0])
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async update(req, res) {
    const { id } = req.params
    const { name, description, professor_id } = req.body

    const fields = []
    const values = []

    try {
      if (name !== undefined) {
        fields.push('name = ?')
        values.push(name)
      }

      if (description !== undefined) {
        fields.push('description = ?')
        values.push(description)
      }

      if (professor_id !== undefined) {
        const [professor] = await db.query(
          'SELECT * FROM professors WHERE id = ?',
          [professor_id]
        )

        if (professor.length === 0) {
          return res.status(400).json({ error: `Professor with ID ${professor_id} does not exist` })
        }

        fields.push('professor_id = ?')
        values.push(professor_id)
      }

      if (fields.length === 0) {
        return res.status(400).json({ msg: 'No fields to update' })
      }

      values.push(id)

      const [result] = await db.query(
        `UPDATE courses SET ${fields.join(', ')} WHERE id = ?`,
        values
      )

      if (result.affectedRows === 0) {
        return res.status(404).json({ msg: `No course found with ID ${id}` })
      }

      res.status(200).json({ msg: `Course with ID ${id} updated successfully` })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async delete(req, res) {
    const { id } = req.params

    try {
      const [result] = await db.query(
        'DELETE FROM courses WHERE id = ?',
        [id]
      )

      if (result.affectedRows === 0) {
        return res.status(404).json({ msg: `No course found with ID ${id}` })
      }

      res.status(200).json({ msg: `Deleted course with ID: ${id}` })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}

module.exports = new CourseController()
