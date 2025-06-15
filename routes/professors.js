const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json( {msg: "GET All professors"} )
})

router.post('/', (req, res) => {
    res.json( {msg: "CREATE professor"} )
})

router.delete('/', (req, res) => {
    res.json( {msg: "DELETE professor"} )
})

router.put('/', (req, res) => {
    res.json( {msg: "UPDATE professor"} )
})

module.exports = router 