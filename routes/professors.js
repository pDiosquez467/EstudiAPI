const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json( {msg: "All professors"} )
})

router.post('/', (req, res) => {
    res.json( {msg: "Create professor"} )
})

router.route('/:id')
    .get((req, res) => {
        res.json( {msg: "Get professor by ID"} )
    })
    .put((req, res) => {
        res.json( {msg: "Update professor by ID"} )
    })
    .delete((req, res) => {
        res.json( {msg: "Delete professor by ID"} )
    })

module.exports = router