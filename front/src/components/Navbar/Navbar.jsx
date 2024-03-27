import React from 'react'
import './Navbar.scss'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 border-b-2 border-amber-700">
            <div className="flex-1">
                <a href="/" className="btn btn-ghost text-xl">
                    <img src="/logo.png" alt="Logo" className="w-12" />
                    Veto'Lib
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <Link to="/" className="btn btn-ghost">
                        Accueil
                    </Link>
                    <Link to="/rendez-vous" className="btn btn-ghost">
                        Prendre rendez-vous
                    </Link>
                    <Link to="/contact" className="btn btn-ghost">
                        Contact
                    </Link>
                    <Link to="/connexion" className="btn btn-ghost">
                        Connexion
                    </Link>
                </ul>
            </div>
        </div>
    )
    return (
        <div className="navbar bg-base-100 border-b-2 border-amber-700">
            <div className="flex-1">
                <a href="/" className="btn btn-ghost text-xl">
                    <img src="/logo.png" alt="Logo" className="w-12" />
                    Veto'Lib
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <Link to="/" className="btn btn-ghost">
                        Accueil
                    </Link>
                    <Link to="/rendez-vous" className="btn btn-ghost">
                        Prendre rendez-vous
                    </Link>
                    <Link to="/contact" className="btn btn-ghost">
                        Contact
                    </Link>
                    <Link to="/connexion" className="btn btn-ghost">
                        Connexion
                    </Link>
                </ul>
            </div>
        </div>
    )
}
