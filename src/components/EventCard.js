import React from 'react';
import { useNavigate } from 'react-router-dom';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import DescriptionIcon from '@mui/icons-material/Description';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './EventCard.css';

const EventCard = ({ event, isPast = false }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/events/${isPast ? 'past' : 'upcoming'}/${event.id}`);
  };

  const handleActionClick = (e) => {
    e.stopPropagation();
    if (isPast) {
      // Navigate to gallery or report
      if (event.gallery || event.report) {
        navigate(`/events/past/${event.id}`);
      }
    } else {
      // Navigate to registration or event details
      navigate(`/events/upcoming/${event.id}`);
    }
  };

  return (
    <div className="event-card" onClick={handleCardClick}>
      <div className="event-card-image">
        <img src={event.image} alt={event.title} onError={(e) => {
          e.target.src = 'https://via.placeholder.com/400x300?text=Event+Image';
        }} />
        {event.tags && event.tags.length > 0 && (
          <div className="event-tags">
            {event.tags.map((tag, index) => (
              <span key={index} className={`event-tag ${tag.toLowerCase()}`}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <div className="event-card-content">
        {!isPast && event.date && event.time && (
          <div className="event-meta">
            <span className="event-date">
              <i className="icon-calendar"></i> {event.date}
            </span>
            <span className="event-time">
              <i className="icon-clock"></i> {event.time}
            </span>
          </div>
        )}
        
        {isPast && event.date && (
          <div className="event-meta">
            <span className="event-date-past">
              <i className="icon-calendar"></i> {event.date}
            </span>
          </div>
        )}

        <h3 className="event-title">{event.title}</h3>
        <p className="event-description">{event.description}</p>

        {!isPast && event.location && (
          <div className="event-location">
            <i className="icon-location"></i> {event.location}
          </div>
        )}

        {isPast && event.attendance && (
          <div className="event-attendance">
            <i className="icon-users"></i> {event.attendance} attendees
          </div>
        )}

        <div className="event-card-actions">
          {!isPast ? (
            <button className="btn-primary" onClick={handleActionClick}>
              Register Now
              <span className="arrow">→</span>
            </button>
          ) : (
            <div className="past-event-actions">
              {event.gallery && (
                <button className="btn-secondary" onClick={handleActionClick}>
                  Gallery
                  <PhotoLibraryIcon className="icon-gallery" fontSize="small" />
                </button>
              )}
              {event.report && (
                <button className="btn-secondary" onClick={handleActionClick}>
                  Report
                  <DescriptionIcon className="icon-report" fontSize="small" />
                </button>
              )}
              {event.videoLink && (
                <button className="btn-secondary" onClick={handleActionClick}>
                  Watch
                  <PlayArrowIcon className="icon-video" fontSize="small" />
                </button>
              )}
            </div>
          )}
          {!isPast && (
            <button className="btn-text" onClick={handleActionClick}>
              Learn More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
