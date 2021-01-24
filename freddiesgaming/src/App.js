import React from 'react'
import './App.css';

import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import Products from './Components/Products';
import Footer from './Components/Footer'


function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
