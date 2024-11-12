import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import BlogLayout from './pages/BlogLayout'
import Blog from './pages/Blog'
import BlogHome from './pages/BlogHome'
const routes = createBrowserRouter([
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/blog',
        element: <BlogLayout/>,
        children:[
            {
                index: true,
                element: <BlogHome />
            },
            {
                path: ':blogId',
                element: <Blog />
            },
        ]
    } //relative routes
    //product routes which are not relativev (absolute)
])
export default function App() {
    
  return (
    <RouterProvider router={routes} />
  )
}
