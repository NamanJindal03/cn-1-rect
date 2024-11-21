import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleTheme } from './ThemeSlice';
export default function Products() {
  const theme = useSelector((store) => store.theme)
  const dispatch = useDispatch();
  return (
    <div>
        {/* show all products */}
        {/* add to cart, remove from cart buttons */}
        {/* handle the logic and fucntionality */}
    </div>
  )
}