import React from 'react'

export default function BlogDisplay({blogs, deleteBlog}) {
  return (
    <div>
        {blogs.map((blog)=>{
            return(
                <div key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>{blog.content}</p>
                    <button onClick={()=>deleteBlog(blog.id)}>Delete</button>
                </div>
            )
        })}
    </div>
  )
}
