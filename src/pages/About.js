import React, { useState } from "react";
import "./About.css";
import "../components/MemberCard.css";
import { membersData } from "../data/membersData.js";
import MemberCard from "../components/MemberCard.js";
import ComputerIcon from '@mui/icons-material/Computer';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';

const About = () => {
  const [selectedBatch, setSelectedBatch] = useState("2025-26");

  const facultyGuardians = [
    {
      name: "Prof. Sagar V. Chavan",
      department: "HOD, Computer Science Department",
      image: "/api/placeholder/250/300",
      description:
        "CSESA acts as the heartbeat of our department. It provides students with the platform they need to explore new frontiers. My role is to guide these bright minds towards innovation and ethical leadership in technology.",
      social: {
        email: "",
        linkedin: "",
      },
    },
    {
      name: "Lec. Shubhangi S. Patil",
      department: "Faculty Coordinator, CSESA",
      image: "/api/placeholder/250/300",
      description:
        "Through CSESA, we nurture the next generation of technology leaders. The club serves as a bridge between academic excellence and practical innovation, helping students develop both technical and leadership skills.",
      social: {
        email: "",
        linkedin: "",
      },
    },
  ];

  const batches = ["2025-26", "2024-25", "2023-24", "2022-23"];

  // Sort members by hierarchical order
  const getSortedMembers = (batch) => {
    if (!membersData || !membersData[batch]) return [];
    return [...membersData[batch]].sort((a, b) => a.order - b.order);
  };

  const developmentTeam = [
    {
      id: 1,
      name: "Dev1",
      role: "Full Stack Developer",
      image: "/api/placeholder/200/240",
      social: { github: "#", linkedin: "#" },
    },
    {
      id: 2,
      name: "Dev2",
      role: "UI/UX Designer",
      image: "/api/placeholder/200/240",
      social: { github: "#", linkedin: "#" },
    },
    {
      id: 3,
      name: "Dev3",
      role: "Backend Developer",
      image: "/api/placeholder/200/240",
      social: { github: "#", linkedin: "#" },
    },
  ];

  return (
    <div className="about-page">
      {/* ahero Section */}
      <section className="about-ahero">
        <div className="ahero-content">
          <div className="ahero-badge">
            <ComputerIcon className="badge-icon" />
            COMPUTER SCIENCE & ENGINEERING STUDENT ASSOCIATION
          </div>
          <h1 className="ahero-title">
            About Us
          </h1>
          <p className="ahero-description">
            CSESA (Computer Science & Engineering Students Association) and SGI (Student Group Initiative) are premier student organizations dedicated to fostering innovation, collaboration, and excellence in the field of computer science and technology.
          </p>
        </div>

        <div className="ahero-pillars">
          <div className="pillar-card">
            <PeopleIcon className="pillar-icon" sx={{ fontSize: 48 }} />
            <h3>Our Community</h3>
            <p>
              A diverse group of passionate students, building a strong network of peers to share knowledge, resources,
              and grow together in a supportive environment.
            </p>
          </div>
          <div className="pillar-card">
            <ComputerIcon className="pillar-icon" sx={{ fontSize: 48 }} />
            <h3>Our Mission</h3>
            <p>
              To empower students with cutting-edge technical knowledge and create a vibrant community of innovators and problem-solvers. Hands-on workshops, hackathons, and real-world projects designed to sharpen industry-relevant skills.
            </p>
          </div>
          <div className="pillar-card">
            <SchoolIcon className="pillar-icon" sx={{ fontSize: 48 }} />
            <h3>Our Impact</h3>
            <p>
              Bridging the gap between curriculum and industry demands through
              events, guest lectures, and mentorship programs that prepare students for successful careers in technology.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Guardians */}
      <section className="faculty-section">
        <h2 className="section-title">Faculty Guardians</h2>
        <div className="faculty-grid">
          {facultyGuardians.map((faculty, index) => (
            <div key={index} className="faculty-card">
              <div className="faculty-image-container">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="faculty-image"
                />
              </div>
              <div className="faculty-info">
                <div className="faculty-label">OUR GUARDIAN</div>
                <h3 className="faculty-name">{faculty.name}</h3>
                <p className="faculty-department">{faculty.department}</p>
                <p className="faculty-description">{faculty.description}</p>
                <div className="faculty-social">
                  <a
                    href={`mailto:${faculty.social.email}`}
                    className="social-icon"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a
                    href={`https://${faculty.social.linkedin}`}
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Members Section */}
      <section className="members-section">
        <div className="member-selector">
          <h2 className="section-title">Our Members</h2>
          <div className="batch-selector">
            <select
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              className="batch-dropdown"
            >
              {batches.map((batch) => (
                <option key={batch} value={batch}>
                  {batch}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p className="section-subtitle">
          The brilliant minds driving our club forward, organized by their
          yearly batches.
        </p>

        <div className="members-grid">
          {membersData &&
          membersData[selectedBatch] &&
          membersData[selectedBatch].length > 0 ? (
            getSortedMembers(selectedBatch).map((member) => (
              <MemberCard
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))
          ) : (
            <div className="no-members">
              <p>Member information for this batch will be updated soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Development Team */}
      <section className="dev-team-section">
        <div className="dev-team-header">
          <div className="dev-badge">BEHIND THE CODE</div>
          <h2 className="section-title">The Development Team</h2>
          <p className="section-subtitle">
            The dedicated team responsible for designing, building, and
            maintaining the CSESA + SGI digital presence.
          </p>
        </div>

        <div className="dev-team-grid">
          {developmentTeam.map((dev) => (
            <div key={dev.id} className="dev-card">
              <div className="dev-image-wrapper">
                <img src={dev.image} alt={dev.name} className="dev-image" />
              </div>
              <div className="dev-info">
                <h3 className="dev-name">{dev.name}</h3>
                <p className="dev-role">{dev.role}</p>
                <div className="dev-social">
                  <a href={dev.social.github} className="dev-social-icon">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={dev.social.linkedin} className="dev-social-icon">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
