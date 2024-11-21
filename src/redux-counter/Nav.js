import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleTheme } from './ThemeSlice';
export default function Nav() {
  const theme = useSelector((store) => store.theme)
  const dispatch = useDispatch();
  return (
    <nav>
        <button 
            onClick={() => dispatch(toggleTheme())}
        >
            Turn to {theme ? 'Light' : 'Dark'}
        </button>                
    </nav>
  )
}