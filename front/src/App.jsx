import {useState} from 'react'
import './App.css'

import {Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Accueil from './pages/Accueil/Accueil'
import About from './pages/About/About'
import Footer from './components/Footer/Footer'
import User from './pages/User/User'
import Connexion from './pages/Connexion/Connexion'
import Error404 from './pages/404/Error404'

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/about" element={<About />} />
                <Route path="/me" element={<User />} />
                <Route path="*" element={<Error404 />} />
                <Route
                    path="/login"
                    element={<Connexion form={'connexion'} />}
                />
                <Route
                    path="/register"
                    element={<Connexion form={'register'} />}
                />
            </Routes>
            <Footer />
        </>
    )
}

export default App
