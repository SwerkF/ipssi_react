import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div class="navbar bg-base-100 border-b-2 border-amber-700">
        <div class="flex-1">
            <a href="/"  class="btn btn-ghost text-xl">
                <img src='/logo.png' alt="Logo" class="w-12" />
                Veto'Lib
            </a>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
            <Link to="/" class="btn btn-ghost">Accueil</Link>
            <Link to="/rendez-vous" class="btn btn-ghost">Prendre rendez-vous</Link>
            <Link to="/contact" class="btn btn-ghost">Contact</Link>
            <Link to="/connexion" class="btn btn-ghost">Connexion</Link>
            </ul>
        </div>
    </div>
  )
}
