import React from 'react';
import { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <nav className= "nav" >
      <a href='#' className='logo'> <img src='./images/logo-proyecto.png'/></a>
      <div className='cart_container'>
      <a href='#' className='cart'><img src='./images/Shopping-cart-transparent-icon.png'/></a>
      </div>
      
    <ul className= {`nav_menu  ${isOpen && "open"}`}>
      <li className='nav_item'>
      <a href='#' className='nav_link'>Inicio</a>
      </li>
      <li className='nav_item'>
      <a href='#' className='nav_link'>Libros</a>
      </li>
      <li className='nav_item'>
      <a href='#' className='nav_link'>Nosotros</a>
      </li>
      <li className='nav_item'>
      <a href='#' className='nav_link'>Contacto</a>
      </li>
    </ul>

    <div className= {`nav_toggle ${isOpen && "open" } ` } onClick= {() => setIsOpen (!isOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    
    
    
   
    
    </nav>
  )
}

export default Navbar