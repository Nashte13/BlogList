const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
    if (blogs.length === 0) {
        return null
    }

    //find blogs with max likes
    let favorite = blogs[0]
    blogs.forEach(blog => {
        if (blog.likes > favorite.likes) {
            favorite = blog
        }
    })
    return favorite
}

const mostBlogs = (blogs) => {
    if (blogs === 0) {
        return null
    }

    const counts = {}
    blogs.forEach(blog => {
        counts[blog.author] = (counts[blog.author] || 0) + 1
    })

    let topAuthor  = null
    let maxBlogs = 0
    for (const author in counts) {
        if (counts[author] > maxBlogs) {
            maxBlogs = counts[author]
            topAuthor = author
        }
    }
    return {author: topAuthor, blogs: maxBlogs}
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs
}