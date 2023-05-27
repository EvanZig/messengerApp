import express, { Express, Request, Response } from 'express'
import mongoose from 'mongoose'
const port = 8000

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
    res.send('its evan bitch')
})

app.listen(port, () => {
    console.log(`app is listening at port ${[port]}`)
})
