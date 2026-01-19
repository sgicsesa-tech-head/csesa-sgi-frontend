import React from 'react';
import './Skeleton.css';

const Skeleton = ({ variant = 'text', width, height, className = '', style = {} }) => {
  const skeletonStyle = {
    width: width || '100%',
    height: height || (variant === 'text' ? '16px' : variant === 'title' ? '24px' : '100%'),
    ...style
  };

  return (
    <div 
      className={`skeleton ${variant === 'circle' ? 'skeleton-circle' : ''} ${className}`}
      style={skeletonStyle}
    />
  );
};

// Blog Card Skeleton
export const BlogCardSkeleton = () => {
  return (
    <div className="card skeleton-blog-card">
      <div className="skeleton-user-info">
        <Skeleton variant="circle" width="40px" height="40px" />
        <Skeleton width="120px" height="16px" />
      </div>
      <div className="skeleton-image" style={{ height: '200px' }} />
      <div className="skeleton-content">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <Skeleton width="80px" height="20px" />
          <Skeleton width="100px" height="20px" />
        </div>
        <Skeleton width="90%" height="24px" />
        <Skeleton width="100%" height="16px" />
        <Skeleton width="100%" height="16px" />
        <Skeleton width="70%" height="16px" />
        <Skeleton width="100px" height="36px" style={{ marginTop: '12px' }} />
      </div>
    </div>
  );
};

// Event Card Skeleton
export const EventCardSkeleton = () => {
  return (
    <div className="event-card skeleton-event-card">
      <div className="skeleton-image" style={{ height: '200px' }} />
      <div style={{ padding: '20px' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
          <Skeleton width="80px" height="24px" />
          <Skeleton width="80px" height="24px" />
        </div>
        <Skeleton width="95%" height="28px" style={{ marginBottom: '12px' }} />
        <Skeleton width="100%" height="16px" />
        <Skeleton width="100%" height="16px" />
        <Skeleton width="80%" height="16px" style={{ marginBottom: '16px' }} />
        <div style={{ display: 'flex', gap: '12px' }}>
          <Skeleton width="100px" height="40px" />
          <Skeleton width="100px" height="40px" />
        </div>
      </div>
    </div>
  );
};

// Member Card Skeleton
export const MemberCardSkeleton = () => {
  return (
    <div className="member-card skeleton-member-card">
      <div className="skeleton-member-image" />
      <Skeleton width="150px" height="24px" />
      <Skeleton width="120px" height="18px" />
      <div className="skeleton-social-links">
        <div className="skeleton-social-icon" />
        <div className="skeleton-social-icon" />
        <div className="skeleton-social-icon" />
      </div>
    </div>
  );
};

// Blog Post Section Skeleton (for home page)
export const BlogPostSkeleton = () => {
  return (
    <div style={{ 
      background: 'rgba(255, 255, 255, 0.02)', 
      borderRadius: '16px', 
      padding: '24px',
      minHeight: '250px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
      <Skeleton variant="circle" width="48px" height="48px" />
      <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
        <Skeleton width="80px" height="20px" />
        <Skeleton width="100px" height="20px" />
      </div>
      <Skeleton width="90%" height="28px" />
      <Skeleton width="100%" height="16px" />
      <Skeleton width="100%" height="16px" />
      <Skeleton width="75%" height="16px" />
    </div>
  );
};

// Upcoming Events Section Skeleton (for home page)
export const UpcomingEventSkeleton = () => {
  return (
    <div style={{ 
      background: 'rgba(255, 255, 255, 0.02)', 
      borderRadius: '16px',
      overflow: 'hidden',
      minHeight: '300px'
    }}>
      <div className="skeleton-image" style={{ height: '180px' }} />
      <div style={{ padding: '20px' }}>
        <Skeleton width="100px" height="20px" style={{ marginBottom: '12px' }} />
        <Skeleton width="95%" height="24px" style={{ marginBottom: '12px' }} />
        <Skeleton width="100%" height="16px" />
        <Skeleton width="80%" height="16px" />
      </div>
    </div>
  );
};

// Generic Skeleton Grid (for rendering multiple skeletons)
export const SkeletonGrid = ({ count = 3, Component = BlogCardSkeleton }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <Component key={index} />
      ))}
    </>
  );
};

export default Skeleton;
