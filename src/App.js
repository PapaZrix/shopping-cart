import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/shop/Shop';
import ItemView from './components/item/ItemView'
import Footer from './components/Footer'
import db from './db/db'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop items={db}/>} />
        <Route path='/shop/:id' element={<ItemView />} />
        <Route path='/cart' />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
