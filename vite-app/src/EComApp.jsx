
import Navbar from './Ecommerce/components/Navbar';
import Footer from './Ecommerce/components/Footer';
import Home from './Ecommerce/components/Home';
import ProductItems from './Ecommerce/components/ProductItems';
import About from './Ecommerce/components/About';
import Contact from './Ecommerce/components/Contact';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Ecommerce/components/Cart';
import { useState } from 'react';
import DummyJSON from './Ecommerce/components/DummyJSON';

function EComApp() {

  let [cart, setCart] = useState([]);

  function addToCart(item) {
    let existingProd = cart.find(prod => prod.id === item.id);
    

    if (existingProd) {
      setCart(cart.map(prod => prod.id === item.id ? { ...prod, qty: prod.qty + 1 } : prod))
    }
    else {
      setCart([...cart, { ...item, qty: 1 }])
    }
  }

  function removeFromCart(item){
    setCart(cart.filter(prod=>prod.id!=item.id))
  }




  return (
    <>



      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/fakeStore-items' element={<ProductItems addToCart={addToCart} />} />
          <Route path='/dummyJson-items' element={<DummyJSON addToCart={addToCart} />} />
          <Route path='/cart' element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>


      </BrowserRouter>









      <Footer />
    </>


  )
}

export default EComApp