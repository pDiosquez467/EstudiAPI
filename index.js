const express = require('express')
const app = express()
const port = 5050

const cors = require('cors')

app.use(express.json())
app.use(cors())

const studentsRoutes = require('./routes/students')
const professorsRoutes = require('./routes/professors')
const courseRoutes = require('./routes/courses')

app.use('/students', studentsRoutes)
app.use('/professors', professorsRoutes)
app.use('/courses', courseRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
