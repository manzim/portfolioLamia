import React from 'react';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import Footer from './Footer/Footer';
import Navbar from './NavBar/Navbar';

import Particles from "react-particles-js";
import {particlesOptions} from './ParticleOptions'

function App() {
  return (
    <div className="App">
    
      <Particles className="particles particles-box" params={particlesOptions} />
      <LandingPage />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
