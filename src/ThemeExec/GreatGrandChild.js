import React, {useContext} from 'react'
import { ThemeContext } from './ThemeContext/Context'
export default function GreatGrandChild() {
    const themeData = useContext(ThemeContext)
  return (
    <div>{themeData.theme}</div>
  )
}
