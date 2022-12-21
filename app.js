const mongoose = require('mongoose')
const express = require('express')
const app = express()
const indexRouter = require('./modules/route')

mongoose.connect('mongodb+srv://seven-food:sevenfood.com@seven-food.717os.mongodb.net/auth?retryWrites=true&w=majority')

app.use(express.json())

app.use('/api', indexRouter)

module.exports = app;