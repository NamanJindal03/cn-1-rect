import React from 'react'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import BlogLayout from './pages/BlogLayout'
import Blog from './pages/Blog'
import BlogHome from './pages/BlogHome'
import ErrorElement from './pages/ErrorElement'

const isAuthenticated = () => {
    return localStorage.getItem('isLoggedIn') === 'true'? true: false
}

const protectedRoute = async({params, request}) => {
    console.log(params);
    console.log(request);
    // console.log(isAuthenticated())
    // throw redirect('/home')
    if(!isAuthenticated()){
        // console.log('coming')
        // return;
        throw redirect('/home')
    }
    console.log('not coming')
    // throw redirect('/profile')
    // if(!isAuthenticated()){
    //     console.log('entering')
    //     throw redirect('/home')
    // }
    return null;
}
const routes = createBrowserRouter([
    {
        path: '/home',
        element: <Home />,

    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/blog',
        element: <BlogLayout/>,
        // errorElement: <ErrorElement />,
        
        children:[
            {
                index: true,
                element: <BlogHome />,
                loader: protectedRoute,
            },
            {
                path: ':blogId',
                element: <Blog />,
                loader: protectedRoute,

            },
        ]
    }, //relative routes
    
])
export default function App() {
    
  return (
    <RouterProvider router={routes} />
  )
}

