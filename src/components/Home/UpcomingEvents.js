import React, { useState, useEffect } from 'react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { UpcomingEventSkeleton } from '../Common/Skeleton';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const event = {
    id: 1,
    date: 'Mar 3, 2026',
    title: 'SGI-Techfest 2026',
    description: 'A 24-hour coding hackathon to solve real-world problems. Teams of 4.',
    time: '10:00 AM',
    category: 'HACKATHON',
    bgColor: '#8fad88'
  };

  if (loading) {
    return (
      <section className="upcoming-events">
        <div className="events-header">
          <div>
            <h2 className="section-title">
              Upcoming Events <span className="live-badge">LIVE</span>
            </h2>
            <p className="section-subtitle">
              Workshops, hackathons, and social gatherings curated for you.
            </p>
          </div>
          <a href="/events" className="view-all-link">
            View all events →
          </a>
        </div>
        <UpcomingEventSkeleton />
      </section>
    );
  }

  return (
    <section className="upcoming-events">
      <div className="events-header">
        <div>
          <h2 className="section-title">
            Upcoming Events <span className="live-badge">LIVE</span>
          </h2>
          <p className="section-subtitle">
            Workshops, hackathons, and social gatherings curated for you.
          </p>
        </div>
        <a href="/events" className="view-all-link">
          View all events →
        </a>
      </div>
      
      <div className="event-card-horizontal">
        <div className="event-image" style={{ background: event.bgColor }}>
          <span className="event-category">{event.category}</span>
        </div>
        <div className="event-content">
          <div className="event-info">
            <p className="event-date"><CalendarTodayIcon fontSize="small" /> {event.date}</p>
            <h3 className="event-title">{event.title}</h3>
            <p className="event-description">{event.description}</p>
            <span className="event-time"><AccessTimeIcon fontSize="small" /> {event.time}</span>
          </div>
          <button className="register-btn">Register →</button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
