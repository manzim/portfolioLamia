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
import { Icon } from '@blueprintjs/core';

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

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <div className="container">
          <Icon style={{ color: darkMode ? "grey" : "white" }} icon="flash" />
          <div className="switch-checkbox">
            <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round"> </span>
            </label>
          </div>
          <Icon style={{ color: darkMode ? "grey" : "yellow" }} icon="moon" />
        </div>
        <FaArrowCircleUp
          className="scrollTop"
          onClick={scrollTop}
          style={{
            height: 40,
            display: showScroll ? 'flex' : 'none',
            right: 0
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
    </div>
  );
}

export default App;
