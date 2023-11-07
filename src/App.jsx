import {  Routes, Route, NavLink } from 'react-router-dom';
import NavBar from './components/NavBar';

import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PriceList from './pages/PriceList';
import Footer from './components/Footer';
import Catalogue from './pages/Catalogue';


function App() {

 

  return (
    <>
    <NavBar />


   

   
   

    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pricelist" element={<PriceList />} />
      <Route path="/catalogue" element={<Catalogue />} />


      
      
    </Routes>
  


    <Footer/>


     
    </>
  )
}

export default App
