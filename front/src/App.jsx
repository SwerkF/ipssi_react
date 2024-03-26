import { useState } from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Accueil from './pages/Accueil/Accueil';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
