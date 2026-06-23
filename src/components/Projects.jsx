import React from 'react';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Mental Health Anxiety Prediction",
      tech: ["Multimodal AI", "Reinforcement Learning", "NLP", "Python"],
      description: "Designed a multimodal deep learning model combining NLP-based language pattern analysis with behavioral signals. Implemented an RL feedback loop that continuously recalibrates prediction thresholds.",
      github: "#",
      live: "#"
    },
    {
      title: "RL-Based Drug Recommendation System",
      tech: ["Reinforcement Learning", "Python", "Data Science"],
      description: "Built a personalized drug recommendation engine using an RL agent to optimize per-patient recommendations. Applied multi-layer fusion architecture merging structured patient data with unstructured inputs.",
      github: "#",
      live: "#"
    },
    {
      title: "Housing Society Help System",
      tech: ["Python", "FastAPI", "MySQL", "HTML/CSS/JS"],
      description: "Architected a full-stack web platform enabling residents to discover, book, and track domestic helpers via a unified interface. Built a FastAPI backend with REST endpoints.",
      github: "#",
      live: "#"
    },
    {
      title: "DRS Management System",
      tech: ["Python", "OpenCV", "Computer Vision"],
      description: "Engineered a real-time Decision Review System tracker ingesting video frames through computer vision pipelines to detect boundary events, no-ball calls, and run confirmations.",
      github: "#",
      live: "#"
    },
    {
      title: "Library Management System",
      tech: ["Java", "Java Swing", "MVC Architecture"],
      description: "Built a standalone desktop application managing full book lifecycle: cataloguing, issuance, return tracking, and member records via a Java Swing GUI.",
      github: "#",
      live: "#"
    },
    {
      title: "Sambhav Club Official Website",
      tech: ["HTML/CSS", "JavaScript", "FastAPI", "MySQL"],
      description: "Designed and delivered the official Sambhav club website. Integrated FastAPI and MySQL backend to automate member registration, event signups, and admin reports.",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card glass glass-hover">
              <div className="project-header">
                <Folder size={32} className="project-folder" />
                <div className="project-links">
                  <a href={project.github} className="project-link"><FaGithub size={20} /></a>
                  <a href={project.live} className="project-link"><ExternalLink size={20} /></a>
                </div>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
