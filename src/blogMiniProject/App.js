import React, { useState } from 'react'
import BlogDisplay from './components/BlogDisplay'
import BlogForm from './components/BlogForm'

export default function App() {
    const [blogs, setBlogs] = useState([]);

    const addBlog = ({title, content, id}) => {
        setBlogs([...blogs, {title, content, id}])
    }

    const deleteBlog = (id) => {
        const filteredBlogs = blogs.filter((blog)=>{
            if(blog.id === id){
                return false
            }
            return true;
        })
        setBlogs(filteredBlogs)
    }

  return (
    <>
        <BlogForm addBlog={addBlog}/>
        <BlogDisplay blogs={blogs} deleteBlog={deleteBlog}/>
    </>
  )
}
