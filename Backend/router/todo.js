const express = require('express')
const app = express()
const {createUser, getUser} = require('../controller/controller')

app.get ('/todo', getUser)
app.post ('/todo', createUser)

module.exports=app