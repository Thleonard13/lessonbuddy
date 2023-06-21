const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
        name : {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        lessons : {
            type: Array,
        },
        practiceGoalInMinutes: {
            type: Number,
            required: true
        },
        weeksPracticeGoalMet: {
            type: Number,
            required: true
        },
})

module.exports = mongoose.model('Student', studentSchema)