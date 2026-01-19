import './App.css';
import WelcomeSection from './welcome.jsx';
import AboutSection from './About.jsx';
import Prizes from './Prizes.jsx';
import Organizers from './Organizers.jsx';
import SponsorsSection from './Sponsors.jsx';
import Footer from './Footer.jsx'
function App() {
  return (
    <div className="App">
      <WelcomeSection />

      <AboutSection />

        <Prizes/>
        <SponsorsSection/>
        <Organizers/>
        <Footer/>
    </div>
  );
}


export default App;
