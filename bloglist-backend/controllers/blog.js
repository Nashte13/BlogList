const blogsRouter = require('express').Router()
const Blog = require('../models/blogs')

blogsRouter.get('/', (req, res) => {
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
    .catch(next(error))
})

blogsRouter.post('/', (req, res, next) => {
    const blog = new Blog(req.body)

    blog.save().then((result) => {
        res.status(201).json(result)
    })
    .catch(next(error))
})

module.exports = blogsRouter;