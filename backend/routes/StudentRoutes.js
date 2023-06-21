const express = require('express')
const router = express.Router()
const Student = require('../models/StudentModel')

//Get all students
router.get('/', async (req, res) => {
    const students = await Student.find();
    res.json(students);
})

//Get single students
router.get('/:id', async (req, res) => {
    const student = await Student.findById(req.params.id);
    res.json(student);
})

module.exports = router;