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

blogsRouter.put('/:id', async(req, res) => {
    const {likes} = req.body

    const updatedBlog = await Blog.findByIdAndUpdate(
        req.params.id,
        {likes},
        {new: true, runValidators: true, context: 'query'}
    )

    if (updatedBlog) {
        res.json(updatedBlog)
    } else {
        res.status(404).json({ error: 'blog not found' })
    }
    
})

blogsRouter.delete('/:id', async (req, res) => {
   const deletedBlog =  await Blog.findByIdAndRemove(req.params.id)
   if (!deletedBlog) {
    return res.status(404).json({ error: 'blog not found' })
   }
    res.status(204).end()
})

module.exports = blogsRouter;