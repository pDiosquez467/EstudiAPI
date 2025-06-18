import express, { Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'

const PORT = 3000

const app = express()

app.use(morgan('dev'))
app.use(cors())

app.get('/', ({req, res}: {req: Request, res: Response; }) => {
    res.send('Hello, World!')
})

app.listen(PORT, () => {
    console.log('Active!')
})