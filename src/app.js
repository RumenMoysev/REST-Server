const express = require('express')

const app = express()

const SERVER_PORT = 3030

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(SERVER_PORT, () => console.log(`REST server is listening on port: ${SERVER_PORT}`))