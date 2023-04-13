import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Header />
    </Router>
  )
}

export default App;
