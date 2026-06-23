import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">My <span className="gradient-text">Journey</span></h2>
        
        <div className="timeline-container">
          {/* Internships */}
          <div className="timeline-group">
            <h3 className="timeline-group-title">
              <Briefcase className="timeline-icon" /> Internships
            </h3>
            
            <div className="timeline">
              <div className="timeline-item glass glass-hover">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Backend Intern <span className="timeline-company">@ StepCode</span></h4>
                  <p className="timeline-date">Currently Doing</p>
                  <ul className="timeline-details">
                    <li>Developed backend REST APIs using Python and FastAPI.</li>
                    <li>Designed relational schemas in MySQL ensuring data integrity.</li>
                    <li>Integrated backend services with frontend modules improving platform reliability.</li>
                  </ul>
                </div>
              </div>
              
              <div className="timeline-item glass glass-hover">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Research Intern <span className="timeline-company">@ Inkarnayat</span></h4>
                  <p className="timeline-date">Currently Doing</p>
                  <ul className="timeline-details">
                    <li>Conducted interdisciplinary research under the School of Liberal Arts.</li>
                    <li>Reviewed literature to identify research gaps and contributed structured summaries.</li>
                    <li>Collaborated with faculty mentors to design research frameworks.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Positions of Responsibility */}
          <div className="timeline-group">
            <h3 className="timeline-group-title">
              <Award className="timeline-icon" /> Leadership
            </h3>
            
            <div className="timeline">
              <div className="timeline-item glass glass-hover">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Associate Minister of Content <span className="timeline-company">@ Student Cabinet</span></h4>
                  <ul className="timeline-details">
                    <li>Owned official student government communications for thousands of students.</li>
                    <li>Coordinated with ministers to translate policy decisions into clear messaging.</li>
                  </ul>
                </div>
              </div>
              
              <div className="timeline-item glass glass-hover">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Management Head <span className="timeline-company">@ Cipher Tech Club</span></h4>
                  <ul className="timeline-details">
                    <li>Directed full event lifecycle: venue booking, volunteer scheduling, external outreach.</li>
                    <li>Secured sponsorships through negotiations with external organizations.</li>
                    <li>Established clear responsibility chains across 10+ volunteers per event.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
