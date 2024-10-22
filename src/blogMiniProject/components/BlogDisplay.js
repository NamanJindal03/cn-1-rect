import React from 'react'

export default function BlogDisplay({blogs}) {
  return (
    <div>
        {blogs.map((blog)=>{
            return(
                <div>
                    <h3>{blog.title}</h3>
                    <p>{blog.content}</p>
                    <button>Delete</button>
                </div>
            )
        })}
    </div>
  )
}
