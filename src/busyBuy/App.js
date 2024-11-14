import React, {useContext} from 'react'
import { db } from './db/firebaseInit';
import { createBrowserRouter, Outlet, redirect, RouterProvider, useNavigate, Navigate } from 'react-router-dom';
import AuthProvider, {AuthContext} from './context/AuthContext';

import './assets/css/style.css'

/* pages */
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        element: <NotAuthenticate />,
        children: [
            {
                path: '/signin',
                element: <Signin/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
        ]
    },
    {
        element: <Authenticate />,
        children: [
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path: '/orders',
                element: <Orders/>
            },
        ]
    },
])
function NotAuthenticate(){
    const auth = useContext(AuthContext);
    // const navigate = useNavigate();
    console.log(isAuthenticated(auth))
    if(!isAuthenticated(auth)){
        console.log('coming here')
        return <Outlet />
    }
    else{
        console.log('coming here');
        // return navigate('/abcd')
        return <Navigate to='/'/>
    }
}
function Authenticate(){
    const auth = useContext(AuthContext);
    // const navigate = useNavigate();

    if(isAuthenticated(auth)){
        return <Outlet />
    }
    else{
        return <Navigate to='/signin'/>
    }
}
function isAuthenticated(auth){
    if(auth.isLoggedIn){
        return true;
    }
    return false;
}

export default function App() {

  return (
    <AuthProvider>
        <RouterProvider router={router}/>
    </AuthProvider>
  )
}
