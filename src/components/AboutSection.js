import React from 'react';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import './AboutSection.css';

const AboutSection = () => {
  const orgStructure = [
    {
      role: 'FC',
      title: 'Faculty Co-ordinator',
      subtitle: 'Mentorship & Guidance',
      color: '#4a9eff'
    },
    {
      role: 'DT',
      title: 'Development Team',
      subtitle: 'Technical Projects',
      color: '#00d4aa'
    },
    {
      role: 'AM',
      title: 'Associate Members',
      subtitle: 'Student Representatives',
      color: '#ff6b6b'
    }
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-left">
          <div className="stats-boxes">
            <div className="stat-box">
              <h3>20+</h3>
              <p>MEMBERS</p>
            </div>
            <div className="stat-box">
              <h3>2+</h3>
              <p>EVENTS</p>
            </div>
          </div>
          
          <div className="org-structure">
            <h3 className="org-title">Organization Structure</h3>
            <div className="org-list">
              {orgStructure.map((item, index) => (
                <div key={index} className="org-item">
                  <div className="org-icon" style={{ background: item.color }}>
                    {item.role}
                  </div>
                  <div className="org-info">
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="about-right">
          <h2 className="about-title">About CSESA + SGI</h2>
          <p className="about-description">
            The Computer Science & Engineering Students Association (CSESA) is 
            dedicated to fostering the technical excellence and professional growth 
            of our students. We're a community of passionate learners, developers, 
            and innovators.
          </p>
          <p className="about-description">
            From organizing brainstorms to social gatherings, our goal is to 
            create a vibrant campus life that balances academics and networking.
          </p>
          
          <div className="about-features">
            <div className="feature-item">
              <PeopleIcon className="feature-icon" />
              <span className="feature-text">564 Members</span>
            </div>
            <div className="feature-item">
              <SchoolIcon className="feature-icon" />
              <span className="feature-text">Faculty Info</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
