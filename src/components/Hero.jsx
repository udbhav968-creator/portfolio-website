import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      
      <div className="container hero-container animate-fade-in">
        <div className="hero-content">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">Udbhav</h1>
          <h2 className="hero-title">
            <span className="gradient-text">AI & ML Engineer</span> <br />
            Full Stack Developer
          </h2>
          <p className="hero-description">
            Second-year B.Tech student at Bennett University. I build intelligent systems and 
            engineering-grade applications using Machine Learning, NLP, and Modern Web Technologies.
          </p>
          
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
            </a>
            <a href="#about" className="btn btn-outline">
              More About Me
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="glass code-card">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <pre>
              <code>
<span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'}
  <br/>  <span className="code-property">name</span>: <span className="code-string">"Udbhav"</span>,
  <br/>  <span className="code-property">role</span>: <span className="code-string">"AI & ML Engineer"</span>,
  <br/>  <span className="code-property">education</span>: <span className="code-string">"B.Tech at Bennett Univ."</span>,
  <br/>  <span className="code-property">skills</span>: [<span className="code-string">"Python"</span>, <span className="code-string">"TensorFlow"</span>, <span className="code-string">"React"</span>],
  <br/>  <span className="code-property">passion</span>: <span className="code-string">"Building intelligent systems"</span>
<br/>{'}'};
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
