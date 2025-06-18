import express, { Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'

import studentRoutes from './routes/students'
import professorRoutes from './routes/professors'
import coursesRoutes from './routes/courses'

const PORT = 3000

const app = express()

app.use(morgan('dev'))
app.use(cors())

app.use('/students', studentRoutes)
app.use('/professors', professorRoutes)
app.use('/courses', coursesRoutes)

app.get('/', ({req, res}: {req: Request, res: Response; }) => {
    res.send('Hello, World!')
})

app.listen(PORT, () => {
    console.log('Active!')
})