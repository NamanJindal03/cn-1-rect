import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home';
import Contact from './page/Contact';
import NotFound from './page/NotFound';
import Product from './page/Product';
import NavBar from './components/NavBar';
import ProductLayout from './components/ProductLayout';
import './style.css'
export default function App() {
  return (
    <>
        <Routes>
            <Route  path='*' element={<NavBar/>} />
        </Routes>
        <Routes>
            <Route  path='/home' element={<Home/>} />        
            <Route  path='/contact' element={<Contact/>} />
            <Route path='*' element={<NotFound/>} />
            <Route path='/product' element={<ProductLayout/>}>
                <Route index element={<> <div>Sample Base product</div></>}/>
                <Route path=':productId' element={<Product />}/>
                <Route path='name' element={<><div>Product name</div></>}/>
            </Route>
        </Routes>
    </>
  )
}
