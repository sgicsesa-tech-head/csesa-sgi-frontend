import React, { useState, useEffect } from 'react';
import MemberCard from './MemberCard';
import { MemberCardSkeleton, SkeletonGrid } from '../Common/Skeleton';
import './MemberBatch.css';

const MemberBatch = ({ members }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [members]);

  if (loading) {
    return (
      <div className="member-batch-container">
        <div className="designation-members" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '24px' }}>
          <SkeletonGrid count={6} Component={MemberCardSkeleton} />
        </div>
      </div>
    );
  }

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
