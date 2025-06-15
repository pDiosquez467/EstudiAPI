class StudentController {
    constructor() {

    }

    getAll(req, res) {
        res.json( {msg: "GET all students"} )
    }

    create(req, res) {
        res.json( {msg: "CREATE student"} )
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