import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home';
import Contact from './page/Contact';
import NotFound from './page/NotFound';
import Product from './page/Product';
export default function App() {
  return (
    <>
        <Routes>
            <Route  path='/home' element={<Home/>} />
            <Route  path='/contact' element={<Contact/>} />
            <Route path='*' element={<NotFound/>} />
            <Route path='/product/:productId' element={<Product />}/>
        </Routes>
    </>
  )
}
