const express = require('express')
const router = express.Router()
const Lesson = require('../models/LessonModel')

// Get all lessons
router.get('/', async (req, res) => {
    const lessons = await Lesson.find().sort({ datePublished : -1 });
    res.json(lessons);
})

//Get single lesson
router.get('/:id', async (req, res) => {
    const lesson = await Lesson.findById(req.params.id)
    res.json(lesson)
})

//Add a lesson
router.post('/', (req, res) => {
    console.log('request started')
    const lesson = new Lesson({
        title: req.body.title, 
        description: req.body.description,
        studentId: req.body.studentId,
        datePublished: req.body.datePublished
    });
    lesson.save();
    res.json(lesson);
})

//Update a lesson
router.patch('/:id', async (req, res) => {
    const { title, description, studentId} = req.body
    let lesson = await Lesson.findById(req.params.id)
    if (title !=null) {
        lesson.title = title
    }

    if (description !=null) {
        lesson.description = description
    }

    if (studentId!=null) {
        lesson.studentId = studentId
    }

    lesson.datePublished = new Date()

    const updatedLesson = await lesson.save();
    res.json(updatedLesson);
})


//Delete a lesson
router.delete('/:id', async (req, res) => {
    const lesson = await Lesson.deleteOne({_id: req.params.id})
    res.json(lesson)
})

module.exports = router;