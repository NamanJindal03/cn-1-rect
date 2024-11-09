import React from 'react'
import { NavLink } from 'react-router-dom'
export default function NavBar() {
  return (
    <nav style={{display: 'flex'}}>
        <ul className='navUl'>
            {/* <li>
                <NavLink to={'/contact'} className={({isActive})=> isActive ? 'active': ''}>Contact</NavLink>
            </li>
            <li><NavLink to={'/product'} className={({isActive})=> isActive ? 'active': ''}>Product</NavLink></li>
            <li><NavLink to={'/home'} className={({isActive})=> isActive ? 'active': ''}>Home</NavLink></li> */}
            <li>
                <NavLink to={'/contact'} >Contact</NavLink>
            </li>
            <li><NavLink to={'/product'} >Product</NavLink></li>
            <li><NavLink to={'/home'} >Home</NavLink></li>
        </ul>
    </nav>
  )
}
