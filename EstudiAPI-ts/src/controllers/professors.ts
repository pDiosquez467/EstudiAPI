import { Request, Response } from "express";

export default class ProfessorController {
    constructor() {

    }

    async getAll({ req, res }: { req: Request; res: Response; }) {
        try {
            res.send("GET All Professors :)")
        } catch (error) {
            if (error instanceof Error) 
                res.send({ error: error.message });
        }
    }

    async create({req, res}: {req: Request, res: Response; }) {
        const { license, first_name, last_name, email } = req.body;

        try {
            res.send({ msg: 'Create a Professor :)' })
        } catch (error) {
            if (error instanceof Error) 
                res.send({ error: error.message });
        }
    }

    async get({req, res}: {req: Request, res: Response; }) {
        try {
            res.send({ msg: 'GET Professor by ID' })
        } catch (error) {
            if (error instanceof Error) 
                res.send({ error: error.message });
        }
    }


    async update({req, res}: {req: Request, res: Response; }) {
        try {
            res.send({ msg: 'UPDATE a Professor by ID' });
        } catch (error) {
            if (error instanceof Error) 
                res.send({ error: error.message });
        }
    }

    async delete({req, res}: {req: Request, res: Response; }) {
        const { id } = req.params

        try {
            res.send({ msg: 'DELETE a Professor by ID' })
        } catch (error) {
            if (error instanceof Error) 
                res.send({ error: error.message });
        }
    }

}
