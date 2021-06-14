const { Mongoose } = require("mongoose")
const crypto = require('crypto')
const { stringify } = require("querystring")

const userSchema = new Mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        maxLength: 32,
        unique: true,
        index: true,
        lowerCase: true
    },
    name: {
        type: String,
        trim: true,
        required: true,
        maxLength: 32
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        maxLength: 32,
        lowerCase: true

    },
    profile: {
        type: String,
        required: true
    },
    hashed_password: {
        type: String,
        required: true
    },
    salt: String,
    about: {
        type: String
    },
    role: {
        type: Number,
        trim: true
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    resetPasswordLink: {
        data: String,
        default: ''
    }
}, { timestamp: true })
module.exports = mongoose.model('User', userSchema)