import React, {useContext} from 'react'
import GreatGrandChild from './GreatGrandChild'
import { ThemeContext } from './ThemeContext/Context'
export default function GrandChild() {
    const themeData = useContext(ThemeContext)
  return (
    <>
        <button onClick={()=> themeData.handleToggleTheme()}>
            {themeData.theme === 'dark' ? 'convert light': 'convert dark'}
        </button>
        <GreatGrandChild />
    </>
  )
}
