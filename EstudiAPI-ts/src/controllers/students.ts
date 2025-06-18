import { Request, Response } from "express";

class StudentController {
    constructor() {

    }

    async getAll({ req, res }: { req: Request; res: Response; }) {
        try {
            res.send("GET All students :)")
        } catch (error) {
            res.status(400).json({ error: error });
        }
    }

    async create({req, res}: {req: Request, res: Response; }) {
        const { license, first_name, last_name, email } = req.body;

        try {
            res.send({ msg: 'Create a student :)' })
        } catch (error) {
            res.status(400).json({ error: error });
        }
    }

    async get({req, res}: {req: Request, res: Response; }) {
        const { id } = req.params;
        try {
            res.send({ msg: 'GET student by ID' })
        } catch (error) {
            res.status(400).json({ error: error });
        }
    }


    async update({req, res}: {req: Request, res: Response; }) {
        try {
            res.send({ msg: 'UPDATE a student by ID' });
        } catch (error) {
            res.status(400).json({ error: error });
        }
    }

    async delete({req, res}: {req: Request, res: Response; }) {
        const { id } = req.params

        try {
            res.send({ msg: 'DELETE a student by ID' })
        } catch (error) {
            res.status(400).json({ error: error });
        }
    }

}

export default new StudentController()