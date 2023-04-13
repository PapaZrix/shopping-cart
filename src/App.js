import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/shop/Shop';
import ItemView from './components/item/ItemView'
import Cart from './components/cart/Cart'
import Footer from './components/Footer'
import db from './db/db'

const App = () => {
  const [cart, setCart] = useState([])

  const handleAddToCart = (e) => {
    const alreadyInCart = cart.map(item => item.id).includes(e.target.value)
    if (alreadyInCart) {
      const item = db.find(item => item.id === e.target.value)
      changeQty(item.id, 1)
    } else {
      const item = db.find(item => item.id === e.target.value)
      setCart((prevCart) => [...prevCart, item])
    }
  }

  const changeQty = (id, delta) => {
    setCart(
      cart.map(
        item => item.id === id ? { ...item, qty: item.qty + delta } : item)
    )
  }

  const getQty = cart.reduce((acc, curr) => acc + curr.qty, 0)

  return (
    <Router>
      <Header cartQty={getQty} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop items={db} handleAddToCart={handleAddToCart} />} />
        <Route path='/shop/:id' element={<ItemView handleAddToCart={handleAddToCart} />} />
        <Route path='/cart' element={<Cart items={cart} />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
