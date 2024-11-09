import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
        <div>This is home</div>
        <Link to={'/contact'}>Contact</Link>
    </>
  )
}
