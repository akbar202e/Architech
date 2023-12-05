const express = require('express')
const app = express()
const todo = require('./todo')

const api = "/api/v1"

app.use(api, todo)

module.exports = app