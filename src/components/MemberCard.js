import React from 'react';
import './MemberCard.css';

const MemberCard = ({ key, name, role, image }) => {
  return (
    <div className="member-card">
      <div className="member-image-wrapper">
        <img src={image} alt={name} className="member-image" />
      </div>
      <div className="member-info">
        <h3 className="member-name">{name}</h3>
        <p className="member-role">{role}</p>
      </div>
    </div>
  );
};

export default MemberCard;
