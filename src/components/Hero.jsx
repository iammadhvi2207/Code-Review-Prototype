import React, { useState } from 'react';
import { Terminal, Zap, Loader2, AlertCircle } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [code, setCode] = useState("def authenticate_user(username, password):\n    # TODO: Implement secure hashing\n    if password == 'admin123':\n        return True\n    return False");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleReview = () => {
    if (!code.trim()) return;
    setIsAnalyzing(true);
    setResult(null);
    
    // Simulate API call to backend
    setTimeout(() => {
      setIsAnalyzing(false);
      setResult({
        severity: 'High',
        message: 'Security Vulnerability: Hardcoded credentials detected. Passwords should never be stored or compared in plain text. Use a secure hashing algorithm like bcrypt.'
      });
    }, 1500);
  };

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
            <a href="#triage" className="btn-secondary">
              <Terminal size={20} style={{ marginRight: '8px' }} />
              View Architecture
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="glass-panel code-window">
            <div className="window-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="window-title">Buggers - Interactive Review</span>
            </div>
            <div className="editor-container">
              <textarea 
                className="code-input"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Paste your code here..."
                spellCheck="false"
              />
            </div>
            
            <div className="review-actions">
              <button 
                className="btn-primary" 
                onClick={handleReview}
                disabled={isAnalyzing}
              >
                {isAnalyzing ? (
                  <><Loader2 size={18} className="spin" style={{ marginRight: '8px' }} /> Analyzing...</>
                ) : (
                  <><Zap size={18} style={{ marginRight: '8px' }} /> Review Code</>
                )}
              </button>
            </div>

            {result && (
              <div className="review-result">
                <AlertCircle className="result-icon" size={20} />
                <div className="result-text">
                  <strong>{result.severity} Risk:</strong> {result.message}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
