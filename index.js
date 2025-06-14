const express = require('express')
const app = express()
const port = 5050

app.use(express.json())

const studentsRoutes = require('./routes/students')

app.use('/students', studentsRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
