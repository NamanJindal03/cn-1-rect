import React from 'react'
import {Routes, Route, RouterProvider, Outlet} from 'react-router-dom'

import PrivateRoutes from './layouts/PrivateRoutes'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Checkout from './pages/Checkout';
import User from './pages/User'
import { Roles } from './constants'
import NotAuthorized from './pages/NotAuthorized'

const currentRole = 'seller'
export default function App() {
    return(
        <Routes>
            <Route element={<PrivateRoutes/>}>
                <Route element={<NormalAuth/>}>
                    <Route path='/checkout' element={<Checkout/>}/>
                    <Route path='/user' element={<User/>}/>
                </Route>
                <Route element={<SellerAuth/>}>
                    <Route path='/addProduct' element={<div>Add the products</div>}/>
                </Route>
            </Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/home' element={<Home/>}/>
            
        </Routes>
    )
  
}

function isSeller(){
    if(Roles.SELLER === currentRole){
        return true
    }
    return false
}
function isNormalUser(){
    if(Roles.NORMAL_USER === currentRole){
        return true
    }
    return false
}


function SellerAuth(){
    if(isSeller()){
        return <Outlet />
    }
    return <NotAuthorized/>
}
function NormalAuth(){
    if(isNormalUser()){
        return <Outlet />
    }
    return <NotAuthorized/>
}