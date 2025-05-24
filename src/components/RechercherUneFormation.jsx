import { useState } from 'react';
import axios from 'axios';
import '../styles/RechercheFormation.css';

function RechercheFormation() {
  const [query, setQuery] = useState('');
  const [formations, setFormations] = useState([]);
  const handleSearch = async () => {
    try {
      const res = await axios.get(`https://skillup-back.onrender.com/formations/search?title=${query}`);
      setFormations(res.data.formations);
    } catch (error) {
      console.error('Erreur lors de la recherche de formation :', error);
      setFormations([]);
    }
  };
  return (
    <div className="recherche-formation">
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ex : Développement Web, Excel..."
        />
        <button onClick={handleSearch}>Rechercher</button>
      </div>
      {formations.length > 0 ? (
        <div className="resultats">
          {formations.map((formation) => (
            <div key={formation.id} className="carte-formation">
              <h3>{formation.titre}</h3>
              <p>{formation.description}</p>
              <span className="niveau">Niveau : {formation.niveau}</span>
              <span className="prix">{formation.prix} €</span>
            </div>
          ))}
        </div>
      ) : (
        query && <p className="no-result">Aucune formation trouvée.</p>
      )}
    </div>
  );
}

export default RechercheFormation;

