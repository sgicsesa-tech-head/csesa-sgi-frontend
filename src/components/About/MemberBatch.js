import React from 'react';
import MemberCard from './MemberCard';
import './MemberBatch.css';

const MemberBatch = ({ members }) => {
  // Group members by role/designation
  const groupedMembers = members.reduce((acc, member) => {
    const role = member.role;
    if (!acc[role]) {
      acc[role] = [];
    }
    acc[role].push(member);
    return acc;
  }, {});

  return (
    <div className="member-batch-container">
      {Object.entries(groupedMembers).map(([role, roleMembers]) => (
        <div 
          key={role} 
          className={`designation-group ${role === 'Executive Member' ? 'full-width' : ''}`}
        >
          <h3 className="designation-title">{role}</h3>
          <div className="designation-members">
            {roleMembers.map((member) => (
              <MemberCard
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
                instagram={member.instagram}
                linkedin={member.linkedin}
                github={member.github}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemberBatch;
