import React from 'react'
import { NavLink } from 'react-router-dom'


export default function NavBar() {
  return (
    <nav className='navbar'>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/pricelist">PriceList</NavLink>
      </li>
    </ul>
  </nav>
  )
}
