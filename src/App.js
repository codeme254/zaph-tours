import './App.css';
import About from './Components/About/About';
import Tours from './Components/Tours/Tours';
import TeamMembers from './Components/Team/Members';
import Testimonials from './Components/Testimonials/Testimonials';
import Subscribe from './Components/Subscribe/Subscribe';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <About />
      <Tours />
      <TeamMembers />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
