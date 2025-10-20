import React from 'react';
import './VictoryBanner.css';

const VictoryBanner = () => {
  return (
    <div className="victory-banner">
      <div className="confetti"></div>
      <div className="banner-content">
        <h2>🎉 Mission Accomplished! 🎉</h2>
        <p>CHEMTECH Analysis Platform Successfully Deployed</p>
        <div className="success-stats">
          <div className="success-item">
            <span className="stat-number">78</span>
            <span className="stat-label">Conversations</span>
          </div>
          <div className="success-item">
            <span className="stat-number">2,588</span>
            <span className="stat-label">Messages</span>
          </div>
          <div className="success-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Success</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VictoryBanner;
