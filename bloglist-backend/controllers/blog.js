const blogsRouter = require('express').Router()
const Blog = require('../models/blogs')

blogsRouter.get('/', async (req, res) => {
    const blogs = await Blog.find({})
    res.json(blogs)
})

blogsRouter.get('/:id', async (req, res) => {
    const blog = Blog.findById(req.params.id)
        if (blog) {
            res.json(blog)
        } else {
            res.status(404).end()
        }
})

blogsRouter.post('/', async (req, res, next) => {
    const body = req.body

    if (!body.title || !body.url) {
        return res.status(400).json({ error: 'title and url are required' })
    }

    const blog = new Blog({
        title: body.title,
        url: body.url,
        author: body.author || 'Unknown',
        likes: body.likes || 0
    })
        const savedBlog = await blog.save()
        res.status(201).json(savedBlog)
    
})

module.exports = blogsRouter;