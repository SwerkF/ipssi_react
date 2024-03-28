import React, {useEffect, useState, useContext} from 'react'
import './Navbar.scss'
import {Link} from 'react-router-dom';

import {UserContext} from '../../App'

export default function Navbar() {
    const [userToken, setUserToken] = useState(null)
    const user = useContext(UserContext)
    const lStorageUser = () => {
        if (typeof window !== 'undefined' && window.localStorage) {
            let token = localStorage.getItem('token');
            setUserToken(token)
        }
    }
    useEffect(lStorageUser, [])

    const handleClickLogout = () => {
        localStorage.removeItem('userToken')
        setUserToken(null)
        alert('Déconnexion effectuée')
    }

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
                    <Link to="/appointment" className="btn btn-ghost">
                        Prendre rendez-vous
                    </Link>
                    <Link to="/contact" className="btn btn-ghost">
                        Contact
                    </Link>
                    {user && user.role === 'admin' ? (
                        <Link to="/admin" className="btn btn-ghost">
                            Admin
                        </Link>
                    ) : (
                        <></>
                    )}
                    {userToken ? (
                        <Link
                            to="/login"
                            className="btn btn-ghost"
                            onClick={handleClickLogout}>
                            Déconnexion
                        </Link>
                    ) : (
                        <Link to="/login" className="btn btn-ghost">
                            Connexion
                        </Link>
                    )}
                </ul>
            </div>
        </div>
    )
}
