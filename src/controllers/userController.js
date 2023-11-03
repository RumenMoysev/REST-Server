const router = require('express').Router()

const userManager = require('../managers/userManager.js')

router.post('/register', async (req, res) => {
    const userData = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }

    try {
        const user = await userManager.register(userData)

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

module.exports = router