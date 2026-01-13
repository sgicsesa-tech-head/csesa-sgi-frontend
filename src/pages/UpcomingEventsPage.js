import React, { useState } from 'react';
import { upcomingEvents } from '../data/eventsData';
import EventCard from '../components/Events/EventCard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import './UpcomingEventsPage.css';

const UpcomingEventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Technical', 'Social', 'Non-Technical'];

  const filteredEvents = selectedCategory === 'All' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === selectedCategory);

  return (
    <div className="upcoming-events-page">
      <div className="page-header">
        <div className="container">
          <div className="header-content">
            <span className="header-badge">
              <CalendarTodayIcon className="badge-icon" />
              Upcoming Events
            </span>
            <h1 className="page-title">Join us at our next gathering. Everyone is welcome!</h1>
            <p className="page-subtitle">
              Explore our upcoming technical workshops, social events, and networking opportunities.
              Register now to secure your spot!
            </p>
          </div>
        </div>
      </div>

      <div className="events-content">
        <div className="container">
          {/* Category Filter */}
          <div className="filter-section">
            <div className="filter-pills">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-pill ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="events-count">
              {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'} found
            </div>
          </div>

          {/* Events Grid */}
          <div className="events-grid">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} isPast={false} />
              ))
            ) : (
              <div className="no-events">
                <EventBusyIcon className="no-events-icon" sx={{ fontSize: 64 }} />
                <h3>No events found</h3>
                <p>There are no {selectedCategory.toLowerCase()} events scheduled at the moment.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventsPage;
