import './App.css';

export default function Prizes() {
  return (
    <section id="Prizes">
      <div className="content-wrapper">
        <h1>Prizes</h1>

        <div className="prizes-grid">

          <div className="prize-box">
            <h2 className="prize-amount">3x 1500 RON </h2>
            <h2 className="prize-details">eMAG Gift Card</h2>
            <h3 className="prize-title">First place </h3>

          </div>

          <div className="prize-box">
            <h2 className="prize-amount">3x 1000 RON</h2>
            <h2 className="prize-details">eMAG Gift Card</h2>
            <h3 className="prize-title">Second place</h3>

          </div>

          <div className="prize-box">
            <h2 className="prize-amount">3x 500 RON</h2>
            <h2 className="prize-details">eMAG Gift Card</h2>
            <h3 className="prize-title">Third place</h3>
          </div>

        </div>
      </div>
    </section>
  );
}