// src/pages/ResetPassword.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ResetPassword.css';

function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("Les mots de passe ne correspondent pas.");
    } else {
      // Simuler une réussite de réinitialisation
      setMessage("Mot de passe réinitialisé avec succès.");
    }
  };

  return (
    <div className="reset-password-container">
      <h2>Réinitialiser le mot de passe</h2>
      <form onSubmit={handleSubmit} className="reset-password-form">
        <input
          type="password"
          placeholder="Nouveau mot de passe"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Réinitialiser</button>
      </form>
      {message && <p className="reset-message">{message}</p>}
      <div className="back-to-login">
        <Link to="/login">Retour à la connexion</Link>
      </div>
    </div>
  );
}

export default ResetPassword;
