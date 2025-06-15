class CourseController {
    constructor() {

    }

    getAll(req, res) {
        res.json( {msg: "GET all courses"} )
    }

    create(req, res) {
        res.json( {msg: "CREATE course"} )
    }

    get(req, res) {
        const { id } = req.params
        res.json( {msg: `GET course by ID: ${id}`} )
    }

    update(req, res) {
        const { id } = req.params
        res.json( {msg: `UPDATE course by ID: ${id}`} )
    }

    delete(req, res) {
        const { id } = req.params
        res.json( {msg: `DELETE course by ID: ${id}`} )
    }

}

module.exports = new courseController()