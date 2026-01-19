// src/Prizes.jsx

// Asigură-te că imporți fișierul tău CSS principal
import './App.css'; 

export default function Prizes() {
  return (
    <section id="Prizes">
      <div className="content-wrapper">
      <h1>Prizes</h1>
      
      <div className="prizes-grid">

        {/* --- Box pentru Locul I --- */}
        <div className="prize-box">
          <h2 className="prize-amount">prize 1</h2>
          <h3 className="prize-title">First place </h3>
        
        </div>

        {/* --- Box pentru Locul II --- */}
        <div className="prize-box">
          <h2 className="prize-amount">prize 2</h2>
          <h3 className="prize-title">Second place</h3>

        </div>

        {/* --- Box pentru Locul III --- */}
        <div className="prize-box">
          <h2 className="prize-amount">prize 3</h2>
          <h3 className="prize-title">Third place</h3>
        </div>

      </div>
     </div>
    </section>
  );
}