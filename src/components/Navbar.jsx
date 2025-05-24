import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <h1>SkillUp</h1>
      </div>
      <nav className={menuOpen ? "navbar-menu open" : "navbar-menu"}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link>
        <Link to="/formations" onClick={() => setMenuOpen(false)}>Formations</Link>
        <Link to="/categories" onClick={() => setMenuOpen(false)}>Catégories</Link>
        <Link to="/login" onClick={() => setMenuOpen(false)}>Se connecter</Link>
      </nav>
      <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}

export default Navbar;
