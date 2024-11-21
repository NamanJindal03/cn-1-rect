import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './ThemeSlice';
export default function Nav() {
  const theme = useSelector((store) => store.theme)
  const dispatch = useDispatch();
  return (
    <nav style={{backgroundColor: 'black', padding: "2px"}}>
        {/* number of items in the cart */}
        <div style={{color: 'white'}}>
            CART: 
        </div>
        <button 
            onClick={() => dispatch(toggleTheme())}
        >
            Turn to {theme ? 'Light' : 'Dark'}
        </button>                
    </nav>
  )
}