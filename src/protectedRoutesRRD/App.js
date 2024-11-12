import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Checkout from './pages/Checkout'

export default function App() {
    return(
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
    )
  
}
