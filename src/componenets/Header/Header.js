import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <Link to='/' style={{textDecoration:"none",color:"white"}}>
      <h1>Amazon Store</h1>
      </Link>
        
        
        <Link to='/logout'>
        <button className='logout'>Log out</button>

        </Link>
    </header>
  )
}

export default Header