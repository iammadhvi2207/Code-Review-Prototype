import React from 'react';
import { Terminal, Zap } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge animate-float">
            <span className="badge-dot"></span>
            Agentic AI Triage Active
          </div>
          <h1 className="hero-title">
            The Next Generation of <br/>
            <span className="text-gradient">AI Code Review & Triage</span>
          </h1>
          <p className="hero-description">
            Buggers is a massive, highly relevant agentic system that understands your codebase structure, executes tools asynchronously, and roots out bugs with vector-based precision.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">
              <Zap size={20} style={{ marginRight: '8px' }} />
              Initialize Engine
            </button>
            <button className="btn-secondary">
              <Terminal size={20} style={{ marginRight: '8px' }} />
              View Architecture
            </button>
          </div>
        </div>
        
        <div className="hero-visual animate-float">
          <div className="glass-panel code-window">
            <div className="window-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="window-title">Buggers - PR Review Agent</span>
            </div>
            <pre className="code-content">
              <code>
<span className="token-keyword">import</span> {'{'} ChromaDB, CodeAgent {'}'} <span className="token-keyword">from</span> <span className="token-string">'@buggers/core'</span>;
<br/><br/>
<span className="token-comment">// Incoming PR Webhook Detected</span>
<span className="token-keyword">const</span> prDiff = <span className="token-function">fetchGithubDiff</span>(webhook);
<br/>
<span className="token-keyword">const</span> analysis = <span className="token-keyword">await</span> CodeAgent.<span className="token-function">analyze</span>(prDiff, {'{'}
  sandbox: <span className="token-string">'Docker'</span>,
  memory: ChromaDB,
  tools: [<span className="token-string">'ast-grep'</span>, <span className="token-string">'eslint'</span>]
{'}'});
<br/><br/>
<span className="token-comment">// Result: Logical flaw found in authentication flow.</span>
<span className="token-function">postInlineComments</span>(analysis.findings);
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
