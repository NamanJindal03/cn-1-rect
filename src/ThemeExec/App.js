import React from 'react'
import ThemeProvider from './ThemeContext/Context'
import Child from './Child'
export default function App() {
  return (
    <ThemeProvider>
        <Child />
    </ThemeProvider>
  )
}
