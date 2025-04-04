import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Spinner from "./Spinner";
import TypingEffect from './TypingEffect';
import './App.css';
import ParticlesP from './components/Particles';
import ScrollButton from "./components/home-section/ScrollButton.js";
import '@fortawesome/fontawesome-free/css/all.min.css';
import SocialIcons from './components/home-section/SocialIcons.js';
import './components/about-section/about.css';

import TronConsole from "./components/about-section/AboutMe.js";

import TronContactForm from'./components/Contact-section/Contact.js';
import SkillsSection from "./components/Skills-section/Skills.js";

import "./components/project-section/Project.css";

import CyberTerminal2 from "./components/project-section/Project.js";

function App() {
  const [loading, setLoading] = useState(true);

// Loader/Loading Screen
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
   
      {/* Navbar ================================================================================================*/}
      <nav class="navbar navbar-expand-lg tron-navbar fixed-top">
        <div class="container">
            <a class="navbar-brand logo" href="#home">THE_GRID</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="navbar-nav ms-auto">
                    <a class="nav-link " href="#home">PORTAL</a>
                    <a class="nav-link" href="#about">PROFILE</a>
                    <a class="nav-link" href="#skills">SKILLS</a>
                    <a class="nav-link" href="#projects">SYSTEMS</a>
                    <a class="nav-link" href="#contact">CONTACT</a>
                </div>
            </div>
        </div>
    </nav>

      <ParticlesP />


      {/* Home ================================================================================================*/}
      <section id="home" className="home d-flex align-items-center justify-content-center min-vh-100">
  <div className="container text-center">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div class="welc-text">
        <TypingEffect />
        </div>
        <p className="neon-text">
        <div class="glitch" data-text="Futuristic Design | Cutting-edge Technology | Creative Solutions">Futuristic Design | Cutting-edge Technology | Creative Solutions</div> </p>
        <ScrollButton/>
        <SocialIcons />
      </div>
    </div>
  </div>
</section>



     {/*About ================================================================================================*/}
    <section id="about" className="about-section tron-about-section">
    <div class="tron-section">
        <div class="card-container">
            <div class="neon-card">
                <div class="card-content">
                    <div class="card-front">
                        <div class="hologram-effect"></div>
                        <img src="tronbackground.jpg" alt="Quantum Core" class="cyber-image"/>
                    </div>
                    <div class="card-back">
                        <div class="data-grid"></div>
                        <div class="cyber-content">
                            <h3 class="cyber-title">PERSONAL DATA</h3>
                            <div class="info-stream">
                                <p class="data-line"><span class="glow">NAME:</span> ERNEST</p>
                                <p class="data-line"><span class="glow">DEGREE:</span>COMPUTER SCIENCE</p>
                                <p class="data-line"><span class="glow">AGE:</span> 19</p>
                                <p class="data-line"><span class="glow">DEGREE:</span>COMPUTER SCIENCE</p>
                                <p class="data-line"><span class="glow">LOCATION:</span> CYBERSPACE</p>
                                <p class="data-line"><span class="glow">LANGUAGE:</span> JAVASCRIPT & C</p>
                                <p class="data-line"><span class="glow">STATUS:</span> ONLINE</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div class="energy-core"></div>
            </div>
        </div>
   </div>
      
      <div className="col-md-6 text-center mt-4 mt-md-0">
        <h2 className="neon-text" id="tr-text">About Me</h2>
        <div className="App">
      <TronConsole />
    </div>
      </div>
   
</section>

 {/*Skills ================================================================================================*/}
<section id="skills">
<SkillsSection/>
</section>

 {/*Projects ================================================================================================*/}
   <section id="projects">

    <CyberTerminal2/>
    </section> 
 
    
 {/*Contact ================================================================================================*/}
<section id="contact"   class="skill-section">
  
<TronContactForm/>
</section>
      
 {/*Footer ================================================================================================*/}
<footer class="cyber-footer">
        <div class="footer-grid"></div>
        <div class="footer-border"></div>
        <div class="footer-content">
            <span class="footer-text">SYSTEM ID: TRN-PRTFL-2025</span>
            <span class="footer-text">ALL RIGHTS RESERVED © CYBERSPACE OPERATIONS</span>
        </div>
    </footer>
   
      
    </>
  );
}

export default App;
