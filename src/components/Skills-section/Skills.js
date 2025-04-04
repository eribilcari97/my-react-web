import React, { useEffect } from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa"; // Import icons,

const skills = [
  { name: "HTML", icon: <FaHtml5 />, level: 95 },
  { name: "CSS", icon: <FaCss3Alt />, level: 85 },
  { name: "JavaScript", icon: <FaJs />, level: 75 },
  { name: "React", icon: <FaReact />, level: 60 },
];

const BatteryGrid = ({ skill }) => {
  return (
    <div className="battery-container">
      <div className="skill-icon">{skill.icon}</div>
      <p className="skill-name">{skill.name}</p>
      <div className="battery-grid" data-level={skill.level}>
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="energy-slash"></div>
        ))}
      </div>
      
    </div>
  );
};

const SkillMatrix = () => {
  useEffect(() => {
    const batteryGrids = Array.from(document.querySelectorAll(".battery-grid"));

    const animateBattery = (battery) => {
      return new Promise((resolve) => {
        const level = parseInt(battery.getAttribute("data-level"), 10);
        const numActive = Math.floor(level / 5);
        const slashes = battery.querySelectorAll(".energy-slash");

        slashes.forEach((slash, index) => {
          setTimeout(() => {
            if (index < numActive) {
              slash.classList.add("active");
            }
            if (index === slashes.length - 1) {
              setTimeout(resolve, 150);
            }
          }, index * 80);
        });
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
          for (let battery of batteryGrids) {
            await animateBattery(battery);
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const container = document.querySelector(".skill-matrix");
    if (container) observer.observe(container);
  }, []);

  return (
    <div className="skill-matrix">
      {skills.map((skill, index) => (
        <BatteryGrid key={index} skill={skill} />
      ))}
    </div>
  );
};

function App() {
  return (
    <div>
      <h1 className="skill-header">TECH STACK</h1>
      <SkillMatrix />
    </div>
  );
}

export default App;
