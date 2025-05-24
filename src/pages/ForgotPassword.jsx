// src/pages/ForgotPassword.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ForgotPassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi de l'email de réinitialisation
    setMessage("Un lien de réinitialisation a été envoyé à " + email);
  };

  return (
    <div className="forgot-password-container">
      <h2>Mot de passe oublié</h2>
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <input
          type="email"
          placeholder="Entrez votre adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Envoyer le lien</button>
      </form>
      {message && <p className="confirmation-message">{message}</p>}
      <div className="back-to-login">
        <Link to="/login">Retour à la connexion</Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
