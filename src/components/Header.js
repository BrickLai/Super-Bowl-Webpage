import React from 'react'
import Logo from '../assets/Logo.png'
import '../style/index.css'


function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftside'>
      <img src={Logo} className='logo-img' alt='Logo'/>
      <p>GreenLeaf</p>
      </div>
      <div className='rightside'>
                    <ul>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
      </div>
    </div>

  )
}

export default Navbar
