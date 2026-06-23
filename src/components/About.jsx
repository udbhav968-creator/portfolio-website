import React from 'react';
import { Code, Database, BrainCircuit, Layout } from 'lucide-react';
import './About.css';

const About = () => {
  const skills = [
    {
      category: "AI & ML",
      icon: <BrainCircuit size={24} />,
      items: ["TensorFlow", "NLP", "Reinforcement Learning", "Computer Vision", "OpenCV", "NumPy", "Pandas"]
    },
    {
      category: "Languages",
      icon: <Code size={24} />,
      items: ["Python", "Java", "JavaScript", "HTML/CSS", "SQL"]
    },
    {
      category: "Web & Backend",
      icon: <Layout size={24} />,
      items: ["FastAPI", "React", "REST API", "Java Swing"]
    },
    {
      category: "Databases & Tools",
      icon: <Database size={24} />,
      items: ["MySQL", "Git", "GitHub", "Vercel", "Relational Schema"]
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        
        <div className="about-grid">
          <div className="about-text glass">
            <h3>Second-year B.Tech Student @ Bennett University</h3>
            <p>
              I am an aspiring AI/ML researcher and engineer with a CGPA of 9.58. I have independently 
              built and deployed projects spanning machine learning, deep learning, computer vision, NLP, 
              and reinforcement learning.
            </p>
            <p>
              I thrive in competitive environments, having placed on the podium in 8 out of 30+ 
              competitions, and I hold leadership roles in university bodies. I am actively seeking a 
              research internship in AI/ML and Data Science to contribute to applied research and advance 
              engineering-grade implementations.
            </p>
            
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number gradient-text">9.58</span>
                <span className="stat-label">CGPA</span>
              </div>
              <div className="stat-item">
                <span className="stat-number gradient-text">8</span>
                <span className="stat-label">Podium Finishes</span>
              </div>
              <div className="stat-item">
                <span className="stat-number gradient-text">90+</span>
                <span className="stat-label">LeetCode</span>
              </div>
            </div>
          </div>
          
          <div className="skills-grid">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="skill-card glass glass-hover">
                <div className="skill-icon">{skillGroup.icon}</div>
                <h4 className="skill-category">{skillGroup.category}</h4>
                <div className="skill-tags">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
