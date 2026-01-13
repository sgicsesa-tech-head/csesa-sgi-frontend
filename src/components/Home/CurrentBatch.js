import React from 'react';
import './CurrentBatch.css';

const CurrentBatch = () => {
  const currentYear = '2025-26';

  return (
    <section className="current-batch">
      <div className="current-batch-container">
        <div className="batch-header">
          <h2 className="batch-title">Current Batch</h2>
          <div className="year-badge">{currentYear}</div>
        </div>
        <div className="batch-image-wrapper">
          <img 
            src="/api/placeholder/1200/600" 
            alt="Current Batch Group Photo" 
            className="batch-group-photo"
          />
          <div className="image-overlay">
            <p className="overlay-text">CSESA & SGI Family {currentYear}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentBatch;
