class ProfessorController {
    constructor() {

    }

    getAll(req, res) {
        res.json( {msg: "GET all professors"} )
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