// src/Organizers.jsx

// Asigură-te că imporți fișierul tău CSS principal
import './App.css';

// --- IMPORTĂ POZELE AICI ---
// Schimbă numele fișierelor cu cele reale
import prez from './assets/prez-test2.png';
import mo from './assets/mo-test.png';
import gd from './assets/gd.jpg';
import pr from './assets/pr-test.png';
import tp from './assets/tp-test.png';
import it from './assets/it-test.png';
import fr from './assets/fr-test.png';
import frp from './assets/frp-test.png';
import pax from './assets/pax-test.png';
import lg from './assets/lg.JPG';


// import pozaPersoana3 from './assets/persoana3.jpg';
// ... importă toate celelalte poze

export default function Organizers() {
  return (
    <section id="Organizers">
      <h1>Organizers</h1>
      <div className='content-wrapper'>
        {/* --- PRIMUL RÂND: 2 PERSOANE --- */}
        <div className="organizer-row">
          <div className="organizer-card">
            <img src={prez} alt="prez" />
            <h3>Cilichidreanu Andi</h3>
            <p>President</p>
            <p>andi-marian.cilichidreanu@best-eu.org</p>
          </div>
          <div className="organizer-card">
            <img src={mo} alt="mo" />
            <h3>Pușcașu Georgiana</h3>
            <p>Main Organizer</p>
            <p>georgiana.puscasu@best-eu.org</p>
          </div>
        </div>

        {/* --- AL DOILEA RÂND: 4 PERSOANE --- */}
        <div className="organizer-row">
          {/* Adaugă aici 4 persoane, la fel ca mai sus */}
          <div className="organizer-card">
            <img src={gd} alt="gd" />
            <h3>Hriscovschi Adelina</h3>
            <p>Graphic Designer</p>
          </div>
          <div className="organizer-card">
            <img src={pr} alt="pr" />
            <h3>Văcaru Mihnea</h3>
            <p>Public Relations</p>
          </div>
          <div className="organizer-card">
            <img src={tp} alt="tp" />
            <h3>Racheru Ioana</h3>
            <p>Topic</p>
          </div>
          <div className="organizer-card">
            <img src={it} alt="it" />
            <h3>Crăciun Bianca</h3>
            <p>IT</p>
          </div>
        </div>

        {/* --- AL TREILEA RÂND: 4 PERSOANE --- */}
        <div className="organizer-row">
          {/* Adaugă aici încă 4 persoane */}
          <div className="organizer-card">
            <img src={fr} alt="fr" />
            <h3>Stănescu Paul</h3>
            <p>Corporate Fundraising</p>
          </div>
          <div className="organizer-card">
            <img src={frp} alt="frp" />
            <h3>Giurgea Andrei</h3>
            <p>Products Fundraising</p>
          </div>
          <div className="organizer-card">
            <img src={pax} alt="pax" />
            <h3>Teșulă Alexandru</h3>
            <p>Participants Responsible</p>
          </div>
          <div className="organizer-card">
            <img src={lg} alt="lg" />
            <h3>Stan Alexandra</h3>
            <p>Logistics</p>
          </div>
        </div>
      </div>
    </section>
  );
}