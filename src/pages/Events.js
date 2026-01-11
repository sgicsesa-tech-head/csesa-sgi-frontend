import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { upcomingEvents, pastEvents } from '../data/eventsData';
import EventCard from '../components/EventCard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HistoryIcon from '@mui/icons-material/History';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import DescriptionIcon from '@mui/icons-material/Description';
import './Events.css';

const Events = () => {
  const navigate = useNavigate();
  const [upcomingFilter, setUpcomingFilter] = useState('All');
  const [pastFilter, setPastFilter] = useState('All');

  const upcomingCategories = ['All', 'Technical', 'Social', 'Non-Technical'];
  const pastYears = ['All', '2025'];

  const filteredUpcomingEvents = upcomingFilter === 'All' 
    ? upcomingEvents.slice(0, 3)
    : upcomingEvents.filter(event => event.category === upcomingFilter).slice(0, 3);

  const filteredPastEvents = pastFilter === 'All'
    ? pastEvents
    : pastEvents.filter(event => event.date.includes(pastFilter));

  return (
    <div className="events-page">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="events-hero-content">
          <div className="live-indicator">
            <span className="live-dot"></span>
            Live Updates
          </div>
          <h1 className="events-hero-title">
            College <span className="highlight">Events</span> &<br />
            Activities
          </h1>
          <p className="events-hero-subtitle">
            Discover a vibrant community of tech enthusiasts and creatives.<br />
            Register for upcoming hackathons, socials, and workshops.
          </p>
          <div className="events-hero-actions">
            <button 
              className="btn-hero-primary"
              onClick={() => navigate('/events/upcoming')}
            >
              Explore Events
            </button>
            <button 
              className="btn-hero-secondary"
              onClick={() => navigate('/events/past')}
            >
              View Archive
            </button>
          </div>
        </div>
        
        <div className="events-hero-bg">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
      </section>

      {/* Upcoming Events Preview Section */}
      <section className="events-preview-section">
        <div className="container">
          <div className="section-header">
            <div className="section-header-left">
              <CalendarTodayIcon className="section-icon" />
              <h2 className="section-title">Upcoming Events</h2>
            </div>
          </div>

          {/* Category Filter */}
          <div className="filter-tabs">
            {upcomingCategories.map((category) => (
              <button
                key={category}
                className={`filter-tab ${upcomingFilter === category ? 'active' : ''}`}
                onClick={() => setUpcomingFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Events Preview Grid */}
          <div className="events-preview-grid">
            {filteredUpcomingEvents.length > 0 ? (
              filteredUpcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} isPast={false} />
              ))
            ) : (
              <div className="no-events-message">
                <p>No {upcomingFilter.toLowerCase()} events available at the moment.</p>
              </div>
            )}
          </div>

          <div className="view-all-section">
            <button 
              className="btn-view-all"
              onClick={() => navigate('/events/upcoming')}
            >
              View All Upcoming Events
              <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Past Events Archive Preview Section */}
      <section className="events-archive-section">
        <div className="container">
          <div className="section-header">
            <div className="section-header-left">
              <HistoryIcon className="section-icon" />
              <h2 className="section-title">Past Events Archive</h2>
            </div>
            <div className="year-filter-pills">
              {pastYears.map((year) => (
                <button
                  key={year}
                  className={`year-pill ${pastFilter === year ? 'active' : ''}`}
                  onClick={() => setPastFilter(year)}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Past Events Grid */}
          <div className="past-events-list">
            {filteredPastEvents.map((event) => (
              <div key={event.id} className="past-event-item">
                <div className="past-event-image">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x200?text=Event+Image';
                    }}
                  />
                  {event.tags && event.tags.length > 0 && (
                    <span className={`past-event-badge ${event.tags[0].toLowerCase()}`}>
                      {event.tags[0]}
                    </span>
                  )}
                </div>
                <div className="past-event-content">
                  <div className="past-event-meta">
                    <span className={`category-badge ${event.category.toLowerCase()}`}>
                      {event.category}
                    </span>
                    <span className="event-date"><CalendarTodayIcon fontSize="small" /> {event.date}</span>
                  </div>
                  <h3 
                    className="past-event-title"
                    onClick={() => navigate(`/events/past/${event.id}`)}
                  >
                    {event.title}
                  </h3>
                  <p className="past-event-description">{event.description}</p>
                  <div className="past-event-actions">
                    {event.gallery && (
                      <button 
                        className="action-btn"
                        onClick={() => navigate(`/events/past/${event.id}`)}
                      >
                        <PhotoLibraryIcon fontSize="small" /> Gallery
                      </button>
                    )}
                    {event.report && (
                      <button 
                        className="action-btn"
                        onClick={() => navigate(`/events/past/${event.id}`)}
                      >
                        <DescriptionIcon fontSize="small" /> Report
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="load-more-section">
            <button 
              className="btn-load-more"
              onClick={() => navigate('/events/past')}
            >
              Load more archived events
              <span className="load-icon">↓</span>
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="events-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Want to organize an event?</h2>
            <p>Have an idea for a workshop, talk, or social event? We'd love to hear from you!</p>
            <button 
              className="btn-cta"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
