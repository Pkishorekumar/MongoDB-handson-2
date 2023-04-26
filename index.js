const express = require('express')
const Router = require('./route')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send("hello")
})

app.listen(2589, () => {
    console.log("server running on the port")
})