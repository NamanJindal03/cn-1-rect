import React, { useState, useEffect } from 'react'
import BlogDisplay from './components/BlogDisplay'
import BlogForm from './components/BlogForm'
import { db } from './db/firebaseInit';
import { collection, addDoc } from "firebase/firestore"; 

export default function App() {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        console.log(db)
    },[])

    const addBlogInDb = async (title, content) => {
        const docRef = await addDoc(collection(db, "mini-blog"), {
            title: title,
            content: content
          });
          console.log("Document written: ", docRef);
    }

    const addBlog = ({title, content, id}) => {
        addBlogInDb(title, content)
        setBlogs([...blogs, {title, content, id}]);
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
