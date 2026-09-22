import React from 'react';
import { Database, Server, Container, Brain, Blocks, Box } from 'lucide-react';
import './TechStackGrid.css';

const TechStackGrid = () => {
  const stack = [
    { name: 'Python & FastAPI', icon: <Server size={24} />, purpose: 'Async Orchestration API' },
    { name: 'MongoDB Atlas', icon: <Database size={24} />, purpose: 'Vector Search & Storage' },
    { name: 'Docker', icon: <Container size={24} />, purpose: 'Execution Sandbox' },
    { name: 'Redis & Celery', icon: <Blocks size={24} />, purpose: 'Queue & Task Workers' },
    { name: 'LangChain / MCP', icon: <Brain size={24} />, purpose: 'AI Orchestration' },
    { name: 'TypeScript & VS Code', icon: <Box size={24} />, purpose: 'IDE Client Extension' },
  ];

  return (
    <section id="architecture" className="section tech-section">
      <div className="container">
        <div className="section-header text-center">
          <h2>Powered by Modern AI Infrastructure</h2>
          <p className="subtitle">Industry standards for high-concurrency, context-aware engineering.</p>
        </div>
        
        <div className="tech-grid">
          {stack.map((item, index) => (
            <div key={index} className="tech-item glass-panel">
              <div className="tech-icon">{item.icon}</div>
              <div className="tech-info">
                <h4>{item.name}</h4>
                <span>{item.purpose}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackGrid;
