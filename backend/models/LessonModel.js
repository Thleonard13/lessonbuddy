const mongoose = require('mongoose')
const { studentSchema } = require ('./StudentModel')

const lessonSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    studentId: {
        type: String,
        required: true
    },
    datePublished:{
        type: Date,
        required: true,
        default: Date.now()
    }
})

module.exports = mongoose.model('Lesson', lessonSchema)