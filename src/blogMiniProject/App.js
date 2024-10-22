import React, { useState } from 'react'
import BlogDisplay from './components/BlogDisplay'
import BlogForm from './components/BlogForm'

export default function App() {
    const [blogs, setBlogs] = useState([]);

    const addBlog = ({title, content}) => {
        setBlogs([...blogs, {title, content}])
    }

  return (
    <>
        <BlogForm addBlog={addBlog}/>
        <BlogDisplay blogs={blogs}/>
    </>
  )
}
