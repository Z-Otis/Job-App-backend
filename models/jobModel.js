const mongoose = require('mongoose')

const Schema = mongoose.Schema

const jobSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    reemailAddress: {
        type: String,
        required: true
    },
    title: {
        type: String
    },
    gender: {
        type: String
    },
    phoneNumber: {
        type: String,
        required: true
    },
    link: {
        type: String
    }
}, { timestamps: true })


module.exports = mongoose.model('JobApp', jobSchema)