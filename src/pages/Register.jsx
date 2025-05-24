import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/Register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const result = await axios.post('https://skillup-back.onrender.com/users/register', {
        name,
        email,
        password,
      });
      setMessage(result.data.message);
      setTimeout(() => navigate("/login"), 2000 )
    } catch (err) {
      setMessage(err.response?.data?.error || 'Erreur lors de la création du compte. Veuillez réessayer.');
    }
  };
  return (
    <div className="register-container">
      <h2>Créer un compte</h2>
      {message && <div className="message">{message}</div>}
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          placeholder="Nom complet"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="show-password">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <label>Afficher le mot de passe</label>
        </div>
        <button type="submit">S'inscrire</button>
      </form>
      <div className="register-links">
        <span>Vous avez déjà un compte ? </span>
        <Link to="/login">Se connecter</Link>
      </div>
    </div>
  );
}

export default Register;
