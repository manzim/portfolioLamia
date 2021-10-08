import React, { useState } from 'react';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import Footer from './Footer/Footer';
import Navbar from './NavBar/Navbar';

import { FaArrowCircleUp } from 'react-icons/fa';

import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Skillset from './Components/Skills/Skill'
import Expereince from './Components/Experience/Expereince';
import Projects from './Components/Projects/Projects';

function App() {

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    }
    else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  window.addEventListener('scroll', checkScrollTop)

  return (
    <div className="App">

      <FaArrowCircleUp
        className="scrollTop"
        onClick={scrollTop}
        style = {{ 
          height: 40, 
          display: showScroll ? 'flex' : 'none', 
          right: -160 
        }}
      />

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
