import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEventById } from '../data/eventsData';
import Skeleton from '../components/Common/Skeleton';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import DescriptionIcon from '@mui/icons-material/Description';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PhoneIcon from '@mui/icons-material/Phone';
import GavelIcon from '@mui/icons-material/Gavel';
import './EventDetailPage.css';

const EventDetailPage = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const isPast = type === 'past';

  useEffect(() => {
    setLoading(true);
    // Simulate data loading
    const timer = setTimeout(() => {
      const eventData = getEventById(id, isPast);
      if (eventData) {
        setEvent(eventData);
      } else {
        // Event not found, redirect back
        navigate('/events');
      }
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [id, isPast, navigate]);

  if (loading) {
    return (
      <div className="event-detail-page">
        <div className="event-hero">
          <div className="event-hero-image">
            <Skeleton width="100%" height="500px" />
          </div>
          <div className="event-hero-content">
            <Skeleton width="150px" height="36px" style={{ marginBottom: '20px' }} />
            <Skeleton width="70%" height="48px" style={{ marginBottom: '20px' }} />
            <div style={{ display: 'flex', gap: '24px', marginTop: '16px' }}>
              <Skeleton width="150px" height="24px" />
              <Skeleton width="120px" height="24px" />
              <Skeleton width="180px" height="24px" />
            </div>
          </div>
        </div>
        <div className="event-detail-content" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <Skeleton width="100%" height="200px" style={{ marginBottom: '24px', borderRadius: '12px' }} />
          <Skeleton width="100%" height="16px" style={{ marginBottom: '12px' }} />
          <Skeleton width="100%" height="16px" style={{ marginBottom: '12px' }} />
          <Skeleton width="90%" height="16px" style={{ marginBottom: '12px' }} />
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="event-detail-loading">
        <div className="loading-spinner"></div>
        <p>Loading event details...</p>
      </div>
    );
  }

  return (
    <div className="event-detail-page">
      {/* Hero Section with Image */}
      <div className="event-hero">
        <div className="event-hero-image">
          <img 
            src={event.image} 
            alt={event.title}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1200x600?text=Event+Image';
            }}
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="event-hero-content">
          <button className="btn-back" onClick={() => navigate(-1)}>
            ← Back
          </button>
          {event.tags && event.tags.length > 0 && (
            <div className="event-tags">
              {event.tags.map((tag, index) => (
                <span key={index} className={`event-tag ${tag.toLowerCase()}`}>
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1 className="event-detail-title">{event.title}</h1>
          {!isPast && (
            <div className="event-meta-info">
              <div className="meta-item">
                <CalendarTodayIcon className="meta-icon" />
                <span>{event.date}</span>
              </div>
              <div className="meta-item">
                <AccessTimeIcon className="meta-icon" />
                <span>{event.time}</span>
              </div>
              <div className="meta-item">
                <LocationOnIcon className="meta-icon" />
                <span>{event.location}</span>
              </div>
            </div>
          )}
          {isPast && (
            <div className="event-meta-info">
              <div className="meta-item">
                <CalendarTodayIcon className="meta-icon" />
                <span>{event.date}</span>
              </div>
              {event.attendance && (
                <div className="meta-item">
                  <PeopleIcon className="meta-icon" />
                  <span>{event.attendance} attendees</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="event-detail-content">
        <div className="container">
          <div className="content-grid">
            {/* Left Column - Main Information */}
            <div className="main-column">
              <section className="detail-section">
                <h2 className="section-title">About This Event</h2>
                <p className="event-full-description">{event.fullDescription}</p>
              </section>

              {!isPast && event.schedule && (
                <section className="detail-section">
                  <h2 className="section-title">Event Schedule</h2>
                  <div className="schedule-list">
                    {event.schedule.map((item, index) => (
                      <div key={index} className="schedule-item">
                        <div className="schedule-time">{item.time}</div>
                        <div className="schedule-activity">{item.activity}</div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {!isPast && event.speakers && (
                <section className="detail-section">
                  <h2 className="section-title">Featured Speakers</h2>
                  <div className="speakers-list">
                    {event.speakers.map((speaker, index) => (
                      <div key={index} className="speaker-card">
                        <div className="speaker-avatar">
                          {speaker.name.charAt(0)}
                        </div>
                        <div className="speaker-info">
                          <h3>{speaker.name}</h3>
                          <p>{speaker.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {!isPast && event.prerequisites && (
                <section className="detail-section">
                  <h2 className="section-title">Prerequisites</h2>
                  <ul className="prerequisites-list">
                    {event.prerequisites.map((prerequisite, index) => (
                      <li key={index}>{prerequisite}</li>
                    ))}
                  </ul>
                </section>
              )}

              {isPast && event.highlights && (
                <section className="detail-section">
                  <h2 className="section-title">Event Highlights</h2>
                  <ul className="highlights-list">
                    {event.highlights.map((highlight, index) => (
                      <li key={index}>
                        <AutoAwesomeIcon className="highlight-icon" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {isPast && event.winners && (
                <section className="detail-section">
                  <h2 className="section-title">Winners</h2>
                  <div className="winners-list">
                    {event.winners.map((winner, index) => (
                      <div key={index} className="winner-card">
                        <EmojiEventsIcon className="winner-badge" sx={{ fontSize: 40 }} />
                        <div className="winner-info">
                          <h3>{winner.team}</h3>
                          <p className="winner-project">{winner.project}</p>
                          <span className="winner-prize">{winner.prize}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {isPast && event.keyTakeaways && (
                <section className="detail-section">
                  <h2 className="section-title">Key Takeaways</h2>
                  <ul className="takeaways-list">
                    {event.keyTakeaways.map((takeaway, index) => (
                      <li key={index}>
                        <LightbulbIcon className="takeaway-icon" />
                        {takeaway}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {event.sponsor && event.sponsor.name && (
                <section className="detail-section sponsor-section">
                  <h2 className="section-title">Sponsored By</h2>
                  {event.sponsor.banner ? (
                    <div className="sponsor-banner">
                      <img 
                        src={event.sponsor.banner} 
                        alt={`Sponsored by ${event.sponsor.name}`}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.classList.add('banner-error');
                        }}
                      />
                    </div>
                  ) : (
                    <div className="sponsor-info-card">
                      {event.sponsor.icon && (
                        <img 
                          src={event.sponsor.icon} 
                          alt={event.sponsor.name}
                          className="sponsor-logo"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      )}
                      <h3 className="sponsor-name">{event.sponsor.name}</h3>
                    </div>
                  )}
                </section>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="sidebar-column">
              {!isPast && (
                <div className="registration-card">
                  <h3>Register for this event</h3>
                  {event.capacity && event.registered && (
                    <div className="capacity-info">
                      <div className="capacity-bar">
                        <div 
                          className="capacity-fill"
                          style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                        ></div>
                      </div>
                      <p className="capacity-text">
                        {event.registered} / {event.capacity} registered
                      </p>
                    </div>
                  )}
                  {event.freeEntry && (
                    <div className="free-badge">Free Entry</div>
                  )}
                  <button className="btn-register">
                    Register Now
                  </button>
                  <p className="registration-note">
                    Registration closes 24 hours before the event
                  </p>
                </div>
              )}

              {isPast && (
                <div className="past-event-links">
                  <h3>Event Resources</h3>
                  {event.gallery && (
                    <a href={event.gallery} className="resource-link">
                      <PhotoLibraryIcon className="resource-icon" />
                      View Gallery
                    </a>
                  )}
                  {event.report && (
                    <a href={event.report} className="resource-link">
                      <DescriptionIcon className="resource-icon" />
                      Read Report
                    </a>
                  )}
                  {event.videoLink && (
                    <a href={event.videoLink} className="resource-link">
                      <PlayArrowIcon className="resource-icon" />
                      Watch Recording
                    </a>
                  )}
                </div>
              )}

              {event.rules && (
                <div className="rules-card">
                  <h3><GavelIcon className="card-title-icon" /> Rules & Regulations</h3>
                  <ul className="rules-list">
                    {event.rules.map((rule, index) => (
                      <li key={index}>{rule}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="info-card">
                <h3>Need Help?</h3>
                {event.coordinators && event.coordinators.length > 0 ? (
                  <>
                    <p>Contact our event coordinators for any queries:</p>
                    <div className="coordinators-list">
                      {event.coordinators.map((coordinator, index) => (
                        <div key={index} className="coordinator-item">
                          <div className="coordinator-avatar">
                            {coordinator.name.charAt(0)}
                          </div>
                          <div className="coordinator-info">
                            <h4>{coordinator.name}</h4>
                            <a href={`tel:${coordinator.phone}`} className="coordinator-phone">
                              <PhoneIcon fontSize="small" />
                              {coordinator.phone}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <p>Have questions about this event?</p>
                    <button 
                      className="btn-contact"
                      onClick={() => navigate('/contact')}
                    >
                      Contact Us
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
