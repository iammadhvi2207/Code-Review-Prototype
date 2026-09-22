import React from 'react';
import { GitPullRequest, Code, ArrowRightLeft } from 'lucide-react';
import './ArchitectureDiagram.css';

const ArchitectureDiagram = () => {
  return (
    <section id="triage" className="section architecture-section">
      <div className="container">
        <div className="section-header text-center">
          <h2>How Buggers Works</h2>
          <p className="subtitle">From IDE to PR, a unified intelligence loop.</p>
        </div>
        
        <div className="diagram-container glass-panel">
          <div className="diagram-node">
            <div className="node-icon"><Code size={32} /></div>
            <h4>VS Code Client</h4>
            <p>Tracks local context & cursor position</p>
          </div>
          
          <div className="diagram-connector">
            <ArrowRightLeft size={32} className="animate-pulse" />
            <div className="connector-label">WebSocket / HTTP</div>
          </div>
          
          <div className="diagram-node central-node">
            <div className="node-glow"></div>
            <h4>Buggers Orchestrator</h4>
            <ul className="node-list">
              <li>FastAPI Async Server</li>
              <li>Chroma / Atlas Vector DB</li>
              <li>LangChain Agents</li>
            </ul>
          </div>
          
          <div className="diagram-connector">
            <ArrowRightLeft size={32} className="animate-pulse" />
            <div className="connector-label">Webhooks</div>
          </div>
          
          <div className="diagram-node">
            <div className="node-icon"><GitPullRequest size={32} /></div>
            <h4>GitHub / Git</h4>
            <p>PR creation & automated inline comments</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureDiagram;
