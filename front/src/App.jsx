import { useState } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Accueil from "./pages/Accueil/Accueil";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import User from "./pages/user/User";
import Appointment from "./pages/Appointment/Appointment";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="/me" element={<User />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
