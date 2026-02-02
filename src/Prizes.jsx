import './App.css';

export default function Prizes() {
  return (
    <section id="Prizes">
      <div className="content-wrapper">
        <h1>Prizes</h1>

        <div className="prizes-grid">

          <div className="prize-box">
            <h2 className="prize-amount">mystery 1</h2>
            <h3 className="prize-title">First place </h3>

          </div>

          <div className="prize-box">
            <h2 className="prize-amount">mystery 2</h2>
            <h3 className="prize-title">Second place</h3>

          </div>

          <div className="prize-box">
            <h2 className="prize-amount">mystery 3</h2>
            <h3 className="prize-title">Third place</h3>
          </div>

        </div>
      </div>
    </section>
  );
}