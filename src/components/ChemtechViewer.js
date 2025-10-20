import React from 'react';
import './ChemtechViewer.css';

const ChemtechViewer = () => {
  return (
    <div className="chemtech-viewer">
      <h1>🧪 CHEMTECH Analysis Dashboard</h1>
      <div className="stats">
        <div className="stat-card">
          <h3>78</h3>
          <p>Conversations Analyzed</p>
        </div>
        <div className="stat-card">
          <h3>2,588</h3>
          <p>Messages Processed</p>
        </div>
        <div className="stat-card">
          <h3>29</h3>
          <p>Analysis Files</p>
        </div>
      </div>
      <div className="repo-link">
        <a 
          href="https://github.com/Dan13681989/CHEMTECH-analysis" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          📁 View Repository on GitHub
        </a>
      </div>
    </div>
  );
};

export default ChemtechViewer;
