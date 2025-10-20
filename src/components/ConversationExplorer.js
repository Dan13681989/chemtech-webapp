import React, { useState, useMemo } from 'react';
import './ConversationExplorer.css';

const ConversationExplorer = ({ conversations }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState('all');
  const [sortBy, setSortBy] = useState('messages');

  // Extract all unique technologies for filter
  const allTechnologies = useMemo(() => {
    const techs = new Set();
    conversations.forEach(conv => {
      conv.technologies.forEach(tech => techs.add(tech));
    });
    return ['all', ...Array.from(techs).sort()];
  }, [conversations]);

  // Filter and sort conversations
  const filteredConversations = useMemo(() => {
    return conversations
      .filter(conv => {
        const matchesSearch = 
          conv.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          conv.summary.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesTech = 
          selectedTech === 'all' || 
          conv.technologies.includes(selectedTech);
        
        return matchesSearch && matchesTech;
      })
      .sort((a, b) => {
        if (sortBy === 'messages') return b.messages - a.messages;
        if (sortBy === 'id') return a.id - b.id;
        return 0;
      });
  }, [conversations, searchTerm, selectedTech, sortBy]);

  return (
    <div className="conversation-explorer">
      <div className="explorer-header">
        <h2>🔍 Conversation Explorer</h2>
        <p>Search and filter through {conversations.length} technical conversations</p>
      </div>

      {/* Controls */}
      <div className="controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="filters">
          <select 
            value={selectedTech} 
            onChange={(e) => setSelectedTech(e.target.value)}
          >
            {allTechnologies.map(tech => (
              <option key={tech} value={tech}>
                {tech === 'all' ? 'All Technologies' : tech}
              </option>
            ))}
          </select>

          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="messages">Sort by Messages</option>
            <option value="id">Sort by ID</option>
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="results-info">
        <p>Showing {filteredConversations.length} of {conversations.length} conversations</p>
      </div>

      <div className="conversations-grid">
        {filteredConversations.map(conv => (
          <div key={conv.id} className="conversation-card">
            <div className="card-header">
              <h3>CHEMTECH {conv.id}</h3>
              <span className="message-count">{conv.messages} messages</span>
            </div>
            <h4>{conv.title}</h4>
            <p className="summary">{conv.summary}</p>
            <div className="tech-tags">
              {conv.technologies.map(tech => (
                <span 
                  key={tech} 
                  className={`tech-tag ${selectedTech === tech ? 'active' : ''}`}
                  onClick={() => setSelectedTech(tech)}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="card-footer">
              <button className="view-btn">View Analysis</button>
              <span className="priority-badge">
                {conv.messages > 150 ? 'High Priority' : 
                 conv.messages > 100 ? 'Medium Priority' : 'Standard'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredConversations.length === 0 && (
        <div className="no-results">
          <p>No conversations found matching your criteria.</p>
          <button 
            className="reset-btn"
            onClick={() => {
              setSearchTerm('');
              setSelectedTech('all');
            }}
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ConversationExplorer;
