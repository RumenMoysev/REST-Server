const router = require('express').Router()

const userManager = require('../managers/userManager.js')

router.post('/register', async (req, res) => {
    const userData = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }

    const rePassword = req.body.repeatPassword

    try {
        const user = await userManager.register(userData, rePassword)

        res.json({
            authToken: 'nqmame',
            email: user.email,
            userId: user._id
        })

    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

router.post('/login', async (req, res) => {
    const userData = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }

    try {
        const user = await userManager.login(userData)
    } catch (err) {
        
    }
})

module.exports = router