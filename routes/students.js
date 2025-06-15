const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json( {msg: "All students"} )
})

router.post('/', (req, res) => {
    res.json( {msg: "Create students"} )
})

router.route('/:id')
    .get((req, res) => {
        res.json( {msg: "Get student by ID"} )
    })
    .put((req, res) => {
        res.json( {msg: "Update students"} )
    })
    .delete((req, res) => {
        res.json( {msg: "Delete students"} )
    })

module.exports = router