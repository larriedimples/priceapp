
import './App.css'
import React from 'react';


import { Routes, Route, } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Priceliist from './pages/Priceliist'
import NavBar from './components/NavBar'
import Footer from './components/Footer'



function App() {





  

  return (
    <>

   <NavBar/>
  




   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/pricelist" element={<Priceliist/>} />
   </Routes>
   <Footer/>


   </>
  )
 
}

export default App
