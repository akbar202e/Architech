const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT ||3001
const {createServer} = require('http')
const server = createServer(app)
const bodyParser = require('body-parser')
const router = require('./router')

app.use(cors());
app.use(bodyParser.json())
app.use(router)
app.use('/test', (req, res) => res.send("Test"))
app.use(express.json());

server.listen(PORT, ()=> console.log("Server running on port " + PORT))