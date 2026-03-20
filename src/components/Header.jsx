import React from 'react'
import "./header.css"
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <ul className="links">
        <li><NavLink to={"produtos"}>Produtos </NavLink></li>
        <li><NavLink to={"contato"} >Contato</NavLink></li>
      </ul>

    </nav>

  )
}

export default Header
