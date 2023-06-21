const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

const URI = "mongodb://localhost:27017/musicBuddy"

mongoose.connect(URI)
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to DB'))

app.use(express.json())
app.use(cors());

const lessonRouter = require('./routes/LessonRoutes')
const studentRouter = require('./routes/StudentRoutes')

app.use('/api/lessons', lessonRouter)
app.use('/api/students', studentRouter)

app.listen(3000, () => {
    console.log('connected to server')
})