import React from 'react'
import { Link } from 'react-router-dom'

function BlogsList({ blogsList }) {
    const BlogsList = blogsList
    return (
        <>
            {        // mapping all the blogs with all the links to their respactive single vlog page

                BlogsList.map((blog, i) => {

                    return (<>
                        <Link key={i} to={`/blog/${blog.articleId}`}>
                            <h2 key={i} className='blog-title m-3 text-center'>{blog.title}</h2>
                            <div key={i} className="blog-content m-3 p-5 border-b-4 border-indigo-500 "> {blog.content} </div>
                        </Link>
                    </>)
                })
            }
        </>
    )
}

export default BlogsList