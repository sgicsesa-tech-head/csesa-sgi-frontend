import React, { useState, useEffect } from 'react';
import { pastEvents } from '../data/eventsData';
import EventCard from '../components/Events/EventCard';
import { EventCardSkeleton, SkeletonGrid } from '../components/Common/Skeleton';
import HistoryIcon from '@mui/icons-material/History';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import './PastEventsPage.css';

const PastEventsPage = () => {
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  
  const years = ['All', '2023', '2022'];
  const categories = ['All', 'Technical', 'Seminar', 'Cultural'];

  useEffect(() => {
    // Simulate data loading
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [selectedYear, selectedCategory]);

  const filteredEvents = pastEvents.filter(event => {
    const yearMatch = selectedYear === 'All' || event.date.includes(selectedYear);
    const categoryMatch = selectedCategory === 'All' || event.category === selectedCategory;
    return yearMatch && categoryMatch;
  });

  return (
    <div className="past-events-page">
      <div className="page-header">
        <div className="container">
          <div className="header-content">
            <span className="header-badge">
              <HistoryIcon className="badge-icon" />
              Past Events Archive
            </span>
            <h1 className="page-title">Browse through our history of successful events and galleries.</h1>
            <p className="page-subtitle">
              Relive the memories and achievements from our past events. Explore galleries, 
              reports, and highlights from our community's journey.
            </p>
          </div>
        </div>
      </div>

      <div className="events-content">
        <div className="container">
          {/* Filter Section */}
          <div className="filter-section">
            <div className="filter-group">
              <label className="filter-label">Filter by Year:</label>
              <div className="filter-pills">
                {years.map((year) => (
                  <button
                    key={year}
                    className={`filter-pill ${selectedYear === year ? 'active' : ''}`}
                    onClick={() => setSelectedYear(year)}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <label className="filter-label">Filter by Category:</label>
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
            </div>
          </div>

          <div className="events-count-header">
            <span className="events-count">
              {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'} found
            </span>
          </div>

          {/* Events Grid */}
          <div className="events-grid">
            {loading ? (
              <SkeletonGrid count={6} Component={EventCardSkeleton} />
            ) : filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} isPast={true} />
              ))
            ) : (
              <div className="no-events">
                <SearchOffIcon className="no-events-icon" sx={{ fontSize: 64 }} />
                <h3>No events found</h3>
                <p>No past events match your selected filters. Try adjusting your selection.</p>
              </div>
            )}
          </div>

          {/* Load More Button (placeholder for future pagination) */}
          {filteredEvents.length > 0 && (
            <div className="load-more-section">
              <button className="btn-load-more">
                Load more archived events
                <span className="load-icon">↓</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PastEventsPage;
