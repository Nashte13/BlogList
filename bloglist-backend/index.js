require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const Blog = require('./models/blogs')
const config = require('./utils/config')
const logger = require('./utils/logger')

const app = express()

const mongoUrl = config.MONGODB_URL
mongoose.connect(mongoUrl, {family: 4})

app.use(express.json())


const PORT = 3003

app.listen(config.PORT, () => {
    logger.info(`App running on port ${config.PORT}`)
})