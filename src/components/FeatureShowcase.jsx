import React from 'react';
import { Bot, Network, Code2 } from 'lucide-react';
import './FeatureShowcase.css';

const FeatureShowcase = () => {
  const features = [
    {
      icon: <Bot size={32} />,
      title: "PR Review Agent",
      description: "Triggered via Git Webhook. Clones into an isolated Docker sandbox, builds context trees, and uses frontier LLMs to post inline PR comments."
    },
    {
      icon: <Network size={32} />,
      title: "Bug Triage Pipeline",
      description: "Powered by MongoDB Atlas Vector Search. Detects duplicate bugs, estimates severity (P0-P4), and routes tickets using multi-agent negotiation."
    },
    {
      icon: <Code2 size={32} />,
      title: "IDE Client Tooling",
      description: "VS Code extension tracking cursor positions and local unsaved diffs for predictive fixes directly in your editor."
    }
  ];

  return (
    <section id="features" className="section feature-section">
      <div className="container">
        <div className="section-header text-center">
          <h2>Core Capabilities</h2>
          <p className="subtitle">Enterprise-grade architecture split between backend orchestration and client tooling.</p>
        </div>
        
        <div className="feature-grid">
          {features.map((feature, index) => (
            <div key={index} className="glass-panel feature-card">
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
