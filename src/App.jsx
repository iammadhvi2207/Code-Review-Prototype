import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureShowcase from './components/FeatureShowcase';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import TechStackGrid from './components/TechStackGrid';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <FeatureShowcase />
      <ArchitectureDiagram />
      <TechStackGrid />
    </>
  );
}

export default App;
