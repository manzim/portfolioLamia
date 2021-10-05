import React from 'react';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import Footer from './Footer/Footer';
import Navbar from './NavBar/Navbar';

// import Particles from "react-particles-js";
// import {particlesOptions} from './ParticleOptions'
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Skillset from './Components/Skills/Skill'
import Expereince from './Components/Experience/Expereince';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
    
      {/* <Particles className="particles particles-box" params={particlesOptions} /> */}
      <LandingPage />
      <Navbar />
      <Education />
      <Expereince />
      <Skillset />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
