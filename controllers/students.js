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
        res.json( {msg: "Get student by ID"} )
    }

    update(req, res) {
        res.json( {msg: "UPDATE student by ID"} )
    }

    delete(req, res) {
        res.json( {msg: "DELETE student by ID"} )
    }

}

module.exports = new StudentController()