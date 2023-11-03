const User = require('../models/User.js')

const usernameLength = 5
const emailLength = 7
const passwordLength = 5

function validate(userData, rePassword) {
    if (userData.email.length < emailLength) {
        throw new Error(`Email should be at least ${emailLength} characters long.`)
    }

    if (userData.username) {
        if (userData.username.length < usernameLength) {
            throw new Error(`Username should be at least ${usernameLength} characters long.`)
        }
    }

    if (userData.password.length < passwordLength) {
        throw new Error(`Password should be at least ${passwordLength} characters long.`)
    }

    if (rePassword) {
        if (rePassword !== userData.password) {
            throw new Error('Passwords do not match')
        }
    }
}

exports.register = (userData) => {
    try {
        validate(userData)

        return User.create(userData)
    } catch (error) {
        throw new Error(error.message)
    }
}