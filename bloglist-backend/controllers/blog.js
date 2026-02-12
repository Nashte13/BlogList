const noteRouter = require('express').Router()
const Blog = require('../models/blogs')

noteRouter.get('/', (req, res) => {
    Blog.find({}).then(blogs => {
        res.json(blogs)
    })
})

noteRouter.get('/:id', (req, res) => {
    Blog.findById(req.params.id).then(blog => {
        if (blog) {
            res.json(blog)
        } else {
            res.status(404).end()
        }
    })
})

noteRouter.post('/', (req, res) => {
    const blog = new Blog(req.body)

    blog.save().then((result) => {
        res.status(201).json(result)
    })
})

module.exports = noteRouter;