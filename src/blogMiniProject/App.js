import React, { useState, useEffect } from 'react'
import BlogDisplay from './components/BlogDisplay'
import BlogForm from './components/BlogForm'
import { db } from './db/firebaseInit';
import { collection, addDoc, doc, setDoc, getDocs, onSnapshot, query, orderBy, deleteDoc  } from "firebase/firestore"; 

export default function App() {
    const [blogs, setBlogs] = useState([]);

    const getBlogsFromDb = async() => {
        const blogFromDb = [];
        const querySnapshot = await getDocs(collection(db, "mini-blog"));
        // console.log(querySnapshot)
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const localBlog = {
                content: data.content,
                title: data.title,
                id: doc.id
            }
            blogFromDb.push(localBlog)
        });
        setBlogs(blogFromDb)
    }

    useEffect(()=>{
        // getBlogsFromDb()
        // const unsub = onSnapshot(
        //     doc(db, "mini-blog"),
        //     (doc) => {
        //       console.log(doc)
        //     }
        // );
        const q = query(collection(db, "mini-blog"), orderBy("title", "asc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const blogFromDb = [];
            querySnapshot.forEach((doc) => {
                blogFromDb.push({...doc.data(), id: doc.id});
            });
            setBlogs(blogFromDb)
            console.log(blogFromDb)
        });
        return () => {
            unsubscribe()
        }
    },[])
    //TODO: way1
    // const addBlogInDb = async (title, content) => {
    //     const docRef = await addDoc(collection(db, "mini-blog"), {
    //         title: title,
    //         content: content
    //       });
    //       console.log("Document written: ", docRef);
    // }

    //TODO: way2
    const addBlogInDb = async (title, content) => {
        const docRef = doc(collection(db, "mini-blog"));
        console.log(docRef);
        await setDoc(docRef, {title, content});
        // console.log("Document written: ", docRef);
    }

    const addBlog = ({title, content, id}) => {
        addBlogInDb(title, content)
        setBlogs([...blogs, {title, content, id}]);
    }

    const deleteBlog = async(id) => {
        // const filteredBlogs = blogs.filter((blog)=>{
        //     if(blog.id === id){
        //         return false
        //     }
        //     return true;
        // })
        // setBlogs(filteredBlogs)
        const info = await deleteDoc(doc(db, "mini-blog", id));
        console.log(info)
    }
    

  return (
    <>
        <BlogForm addBlog={addBlog}/>
        <BlogDisplay blogs={blogs} deleteBlog={deleteBlog}/>
    </>
  )
}
