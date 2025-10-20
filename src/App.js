import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🧪 CHEMTECH Analysis Platform</h1>
        <p>Interactive dashboard for technical conversation analysis</p>
        
        <div className="project-links">
          <a
            className="App-link"
            href="https://github.com/Dan13681989/CHEMTECH-analysis"
            target="_blank"
            rel="noopener noreferrer"
          >
            📊 View Analysis Repository
          </a>
          <br />
          <a
            className="App-link"
            href="/analysis"
            rel="noopener noreferrer"
          >
            🔍 Explore Analysis Data
          </a>
        </div>

        <div className="tech-stack">
          <h3>Technologies Covered:</h3>
          <ul>
            <li>Chemistry Informatics (RDKit)</li>
            <li>FastAPI Backend Development</li>
            <li>React/Node.js Applications</li>
            <li>macOS System Administration</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
