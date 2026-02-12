const notesRouter = require('express').Router()
const Blog = require('../models/blogs')

notesRouter.get('/', (req, res) => {
    Blog.find({}).then(blogs => {
        res.json(blogs)
    })
})

notesRouter.get('/:id', (req, res) => {
    Blog.findById(req.params.id).then(blog => {
        if (blog) {
            res.json(blog)
        } else {
            res.status(404).end()
        }
    })
})

notesRouter.post('/', (req, res) => {
    const blog = new Blog(req.body)

    blog.save().then((result) => {
        res.status(201).json(result)
    })
})

module.exports = notesRouter;