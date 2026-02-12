require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const Blog = require('./models/blogs')
const config = require('./utils/config')

const app = express()

const mongoUrl = config.MONGODB_URL
mongoose.connect(mongoUrl, {family: 4})

app.use(express.json())

app.get('/api/blogs', (req, res) => {
    Blog.find({}).then(blogs => {
        res.json(blogs)
    })
})

app.post('/api/blogs', (req, res) => {
    const blog = new Blog(req.body)

    blog.save().then((result) => {
        res.status(201).json(result)
    })
})

const PORT = 3003

app.listen(config.PORT, () => {
    logger.info(`App running on port ${config.PORT}`)
})