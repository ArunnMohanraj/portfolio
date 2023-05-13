import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from './components/Header.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Contacts from './components/Contacts.js';
import Particles from "./components/Particles.js";

function App() {
  return (
    <div>
    <Navbar />
    <Particles className="particle-canvas" /> 
    <Header />
    <About />
    <Skills />
    <Contacts />
    </div>
  );
}

export default App;
