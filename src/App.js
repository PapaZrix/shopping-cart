import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/shop/Shop';
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' />
        <Route path='/cart' />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
