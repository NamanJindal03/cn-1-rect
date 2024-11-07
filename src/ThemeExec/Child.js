import React, { useContext } from 'react'
import GrandChild from './GrandChild'
import { ThemeContext } from './ThemeContext/Context'
export default function Child() {
    const themeData = useContext(ThemeContext)
  return (
    <>
        <h1 style={
            {
                color: `${themeData.theme === 'dark' ? 'white': 'black'}`,
                backgroundColor: `${themeData.theme === 'dark' ? 'black': 'white'}`,
            }
        }>
            THEME CONTEXT
        </h1>
        <GrandChild />
    </>
  )
}
