import React from 'react';
import RechercheFormation from '../components/RechercherUneFormation';
import '../styles/Home.css';

function Home() {
  return (
    <div>
      <main>
        <section className="hero">
          <h2>Bienvenue sur SkillUp !</h2>
          <p>Trouvez une formation, trouvez votre avenir.</p>
          <RechercheFormation />
        </section>
        <section className="categories">
          <h3>Catégories populaires</h3>
          <ul>
            <li>Développement Web</li>
            <li>Design Graphique</li>
            <li>Bureautique</li>
          </ul>
        </section>
        <section className="how-it-works">
          <h3>Comment ça marche ?</h3>
          <ol>
            <li>Cherchez une formation</li>
            <li>Réservez</li>
            <li>Apprenez !</li>
          </ol>
        </section>
      </main>
    </div>
  );
}

export default Home;