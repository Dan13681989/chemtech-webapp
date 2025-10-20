import React from 'react';
import './App.css';
import { chemtechData } from './data/chemtechData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🧪 CHEMTECH Analysis Platform</h1>
        <p>Interactive dashboard for {chemtechData.overview.totalConversations} technical conversations</p>
        
        {/* Statistics Grid */}
        <div className="stats-grid">
          <div className="stat-item">
            <h2>{chemtechData.overview.totalConversations}</h2>
            <p>Conversations</p>
          </div>
          <div className="stat-item">
            <h2>{chemtechData.overview.totalMessages}</h2>
            <p>Messages</p>
          </div>
          <div className="stat-item">
            <h2>{chemtechData.overview.analysisFiles}</h2>
            <p>Analysis Files</p>
          </div>
        </div>

        {/* Project Links */}
        <div className="project-links">
          <a
            className="App-link"
            href={chemtechData.overview.repository}
            target="_blank"
            rel="noopener noreferrer"
          >
            📊 View Analysis Repository
          </a>
          <a
            className="App-link"
            href={chemtechData.overview.netlifyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            🌐 Live Website
          </a>
        </div>

        {/* Key Conversations */}
        <div className="conversations-section">
          <h3>Key Conversations Analyzed:</h3>
          {chemtechData.keyConversations.map(conv => (
            <div key={conv.id} className="conversation-card">
              <h4>CHEMTECH {conv.id}: {conv.title}</h4>
              <p>{conv.summary}</p>
              <div className="tech-tags">
                {conv.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <small>{conv.messages} messages analyzed</small>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="tech-stack">
          <h3>Technologies Covered:</h3>
          <div className="tech-list">
            {chemtechData.technologies.map((tech, index) => (
              <div key={index} className="tech-item">{tech}</div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
