import React from 'react';
import { ShieldCheck, Code2 } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header glass-panel">
      <div className="header-container">
        <div className="logo-group">
          <ShieldCheck className="logo-icon" size={28} />
          <span className="logo-text">Buggers</span>
        </div>
        
        <nav className="main-nav">
          <a href="#features">Features</a>
          <a href="#architecture">Architecture</a>
          <a href="#triage">Bug Triage</a>
        </nav>
        
        <div className="actions-group">
          <button className="btn-secondary btn-small">
            <Code2 size={18} style={{ marginRight: '8px' }} />
            View Repository
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
