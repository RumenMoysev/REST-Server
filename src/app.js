const express = require('express')
const routes = require('./routes.js')

const app = express()

const SERVER_PORT = 3030

app.use(routes)

app.listen(SERVER_PORT, () => console.log(`REST server is listening on port: ${SERVER_PORT}`))