// CyberTerminal.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import './Project.css'; 

const CyberTerminal2 = () => {
    const projects = [
        {
          id: 1,
          fileType: ">> INCOMPLETE",
          projectId: "TRN-PRJ-001",
          asciiArt: `╔═[PR01.1]═╗
      ║ NEURAL ║
      ║ INTERFACE ║
      ╚══════════╝`,
          codeLines: [
            "$> init_system --type=cybernetics",
            "$> compile --modules=neural,holographics"
          ]
        },
    {
      id: 2,
      fileType: ">> INCOMPLETE",
      projectId: "TRN-PRJ-002",
      asciiArt: `╔═[PR01.2]═╗
║ QUANTUM ║
║ ENCRYPT ║
╚═════════╝`,
      codeLines: [
        "$> init_system --type=cryptography",
        "$> compile --modules=crypto,trading"
      ]
    },
    {
      id: 3,
      fileType: ">> INCOMPLETE",
      projectId: "TRN-PRJ-003",
      asciiArt: `╔═[PR01.3]═╗
║ HEALTH   ║
║ FITNESS  ║
╚══════════╝`,
      codeLines: [
        "$> init_system --type=display",
        "$> compile --modules=photonics,laser"
      ]
    }
  ];

  return (
    <section className="cyber-terminal">
     

      <div className="project-grid">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            fileType={project.fileType}
            projectId={project.projectId}
            asciiArt={project.asciiArt}
            codeLines={project.codeLines}
          />
        ))}
      </div>
    </section>
  );
};

export default CyberTerminal2;