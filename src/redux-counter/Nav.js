import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './ThemeSlice';
export default function Nav() {
  const theme = useSelector((store) => store.theme); //if you take wrong state then the optimization cost is very high
  const cartData = useSelector((store)=> store.cart);
  const dispatch = useDispatch();
  return (
    <nav style={{backgroundColor: 'black', padding: "2px"}}>
        {/* number of items in the cart */}
        <div style={{color: 'white'}}>
            CART: {cartData.length}
        </div>
        <button 
            onClick={() => dispatch(toggleTheme())}
        >
            Turn to {theme ? 'Light' : 'Dark'}
        </button>                
    </nav>
  )
}