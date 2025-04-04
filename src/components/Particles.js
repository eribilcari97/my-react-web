import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 
//BACKGROUND PARTICLES


const ParticlesP = () => {
  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  const particleOptions = {
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
    },
    particles: {
      color: { value: "#0ff" },
      links: { color: "#0ff", distance: 150, enable: true, opacity: 0.5, width: 1 },
      move: { enable: true, speed: 2, direction: "none", outMode: "out" },
      number: { density: { enable: true, area: 800 }, value: 50 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { random: true, value: 3 },
    },
    detectRetina: true,
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      
      <Particles id="tsparticles" init={particlesInit} options={particleOptions} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }} />
    </div>
  );
};

export default ParticlesP;

