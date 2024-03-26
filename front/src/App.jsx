import { useState } from 'react';
import './App.css';
import User from './pages/user/User';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<User/>} />
      </Routes>
    </>
  )
}

export default App