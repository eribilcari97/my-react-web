// ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ 
  fileType = ">> FILE", 
  projectId = "UNKNOWN_ID", 
  asciiArt = '', 
  codeLines = [] 
}) => {
  return (
    <div className="code-card">
      <div className="card-header">
        <span className="file-type">{fileType}</span>
        <span className="project-id">{projectId}</span>
      </div>
      <div className="card-body">
        <div className="ascii-art">
          {asciiArt?.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
        <div className="project-meta">
          {codeLines.map((line, i) => (
            <div key={i} className="code-line">{line}</div>
          ))}
        </div>
      </div>
      <div className="card-footer">
        <button className="cyber-button">
          <span className="prompt"></span> EXECUTE
        </button>
        <div className="status-led" data-status="active"></div>
      </div>
    </div>
  );
};

export default ProjectCard;