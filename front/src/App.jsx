import React, { useEffect, useState, useContext, createContext } from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Accueil from './pages/Accueil/Accueil';
import About from './pages/About/About';
import Admin from './pages/Admin/Admin';
import Footer from './components/Footer/Footer';
import User from './pages/User/User';
import Error404 from './pages/404/Error404';

// Créer un contexte pour stocker l'utilisateur
const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(null); // État pour stocker l'utilisateur

  useEffect(() => {
    if(localStorage.getItem('token')) {
      fetch('http://localhost:3000/user/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }})
      .then(res => res.json())
      .then(res => {
        if(res.erreur) {
          localStorage.removeItem('token');
          setUser(null);
          return;
        } else {
          setUser(res);
        }
      })
    } else {
      setUser(null);
    }
  }, []);

  return (
    <>
      <UserContext.Provider value={user}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/about" element={<About />} />
          <Route path="/me" element={<User />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export { UserContext }; // Exportez UserContext

export default App;
