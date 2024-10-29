import React from 'react'
import styles from '../style/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
        <div>
            <span>Brand </span>
            <span>PhotoFolio</span>
        </div>
    </nav>
  )
}
