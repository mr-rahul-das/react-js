import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import PageNotFound from './pages/PageNotFound';


function App() {
  return (
    <>


    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
    
    
    </BrowserRouter>

    <Footer/>
    
    </>
  )
}

export default App