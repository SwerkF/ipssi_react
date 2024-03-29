import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <aside>
                <img src="/logo.png" alt="logo" className="w-20 grayscale" />
                <p>
                    VetoLib
                    <br />
                    Présent pour vos animaux depuis 2012.
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Pages</h6>
                <Link to="/" className="link link-hover">
                    Accueil
                </Link>
                <Link to="appointment" className="link link-hover">
                    Prendre rendez-vous
                </Link>
                <Link to="login" className="link link-hover">
                    Connexion
                </Link>
            </nav>
            <nav>
                <h6 className="footer-title">Notre entreprise</h6>
                <Link to="about" className="link link-hover">
                    A propos
                </Link>
                <Link to="jobs" className="link link-hover">
                    Recrutement
                </Link>
            </nav>
            <nav>
                <h6 className="footer-title">Légal</h6>
                <Link to="legal/cgu" className="link link-hover">
                    CGU
                </Link>
                <Link to="legal/legal-mentions" className="link link-hover">
                    Mentions légales
                </Link>
                <Link to="legal/confidentiality" className="link link-hover">
                    Confidentialité
                </Link>
                <Link to="legal/cookies" className="link link-hover">
                    Cookies
                </Link>
            </nav>
        </footer>
    )
}
