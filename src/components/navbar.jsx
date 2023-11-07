import { NavLink } from "react-router-dom";
import {useState} from 'react';

export default function NavBar() {
  const [ menuOpen, setMenuOpen] =useState(false)

  return (

    <div className={`navbar ${menuOpen ? 'open' : ''}`}>
    <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about" >About</NavLink>
      <NavLink to="/contact" >Contact</NavLink>
      <NavLink to="/pricelist" >Pricelist</NavLink>
      <NavLink to="/catalogue" >Catalogue</NavLink>
    </nav>
    </div>
   
  )
}
