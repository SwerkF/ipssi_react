import React from 'react'
import './Error404.scss'

import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <div className="hero h-screen" style={{backgroundImage: 'url(/404.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-white">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Erreur 404 !</h1>
      <p className="mb-5">Aucune page trouvée.</p>
      <Link to="/" className="btn btn-primary">Retour à l'accueil</Link>
    </div>
  </div>
</div>
  )
}
