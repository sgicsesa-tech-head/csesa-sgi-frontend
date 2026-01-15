import React, { useState, useEffect } from 'react';
import './AdminCommon.css';
import { upcomingEvents, pastEvents } from '../../data/eventsData';

function EventAdmin() {
  const [eventType, setEventType] = useState('upcoming');
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    fullDescription: '',
    date: '',
    time: '',
    location: '',
    venue: '',
    image: '',
    category: 'Technical',
    registrationLink: '',
    capacity: '',
    registered: 0,
    sponsorName: '',
    sponsorIcon: '',
    sponsorBanner: ''
  });

  useEffect(() => {
    if (eventType === 'upcoming') {
      setEvents([...upcomingEvents]);
    } else {
      setEvents([...pastEvents]);
    }
  }, [eventType]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const eventData = {
      ...formData,
      tags: formData.category === 'Technical' ? ['TECHNICAL'] : 
            formData.category === 'Social' ? ['SOCIAL'] : ['NON-TECHNICAL'],
      capacity: formData.capacity ? parseInt(formData.capacity) : undefined,
      registered: formData.registered ? parseInt(formData.registered) : 0,
      sponsor: {
        name: formData.sponsorName || '',
        icon: formData.sponsorIcon || '',
        banner: formData.sponsorBanner || ''
      }
    };

    // Remove sponsor if all fields are empty
    if (!eventData.sponsor.name && !eventData.sponsor.icon && !eventData.sponsor.banner) {
      delete eventData.sponsor;
    }

    if (editingEvent) {
      setEvents(events.map(event => 
        event.id === editingEvent.id 
          ? { ...eventData, id: editingEvent.id }
          : event
      ));
    } else {
      const newEvent = {
        ...eventData,
        id: events.length > 0 ? Math.max(...events.map(e => e.id)) + 1 : 1
      };
      setEvents([...events, newEvent]);
    }

    resetForm();
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setFormData({
      title: event.title || '',
      description: event.description || '',
      fullDescription: event.fullDescription || '',
      date: event.date || '',
      time: event.time || '',
      location: event.location || '',
      venue: event.venue || '',
      image: event.image || '',
      category: event.category || 'Technical',
      registrationLink: event.registrationLink || '',
      capacity: event.capacity || '',
      registered: event.registered || 0,
      sponsorName: event.sponsor?.name || '',
      sponsorIcon: event.sponsor?.icon || '',
      sponsorBanner: event.sponsor?.banner || ''
    });
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      setEvents(events.filter(event => event.id !== id));
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      fullDescription: '',
      date: '',
      time: '',
      location: '',
      venue: '',
      image: '',
      category: 'Technical',
      registrationLink: '',
      capacity: '',
      registered: 0,
      sponsorName: '',
      sponsorIcon: '',
      sponsorBanner: ''
    });
    setEditingEvent(null);
    setShowForm(false);
  };

  return (
    <div className="admin-section">
      <div className="section-header">
        <h2>Manage Events</h2>
        <div className="header-actions">
          <select 
            className="event-type-select"
            value={eventType} 
            onChange={(e) => {
              setEventType(e.target.value);
              setShowForm(false);
              resetForm();
            }}
          >
            <option value="upcoming">Upcoming Events</option>
            <option value="past">Past Events</option>
          </select>
          <button className="btn-add" onClick={() => setShowForm(!showForm)}>
            <i className="fas fa-plus"></i>
            {showForm ? 'Cancel' : 'Add Event'}
          </button>
        </div>
      </div>

      {showForm && (
        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Event Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                <option value="Technical">Technical</option>
                <option value="Social">Social</option>
                <option value="Non-Technical">Non-Technical</option>
                <option value="Workshop">Workshop</option>
                <option value="Seminar">Seminar</option>
                <option value="Cultural">Cultural</option>
              </select>
            </div>

            <div className="form-group">
              <label>Date *</label>
              <input
                type="text"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                placeholder="e.g., Mar 5 or Sep 15, 2023"
                required
              />
            </div>

            <div className="form-group">
              <label>Time</label>
              <input
                type="text"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                placeholder="e.g., 10:00 AM"
              />
            </div>

            <div className="form-group">
              <label>Location *</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Venue</label>
              <input
                type="text"
                name="venue"
                value={formData.venue}
                onChange={handleInputChange}
              />
            </div>

            {eventType === 'upcoming' && (
              <>
                <div className="form-group">
                  <label>Capacity</label>
                  <input
                    type="number"
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleInputChange}
                    min="0"
                  />
                </div>

                <div className="form-group">
                  <label>Registered</label>
                  <input
                    type="number"
                    name="registered"
                    value={formData.registered}
                    onChange={handleInputChange}
                    min="0"
                  />
                </div>

                <div className="form-group full-width">
                  <label>Registration Link</label>
                  <input
                    type="url"
                    name="registrationLink"
                    value={formData.registrationLink}
                    onChange={handleInputChange}
                    placeholder="https://forms.google.com/..."
                  />
                </div>
              </>
            )}

            <div className="form-group full-width">
              <label>Short Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="2"
                required
              />
            </div>

            <div className="form-group full-width">
              <label>Full Description</label>
              <textarea
                name="fullDescription"
                value={formData.fullDescription}
                onChange={handleInputChange}
                rows="4"
              />
            </div>

            <div className="form-group full-width">
              <label>Event Image URL *</label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                placeholder="https://example.com/event-image.jpg"
                required
              />
            </div>

            <div className="form-section-title">Sponsor Information</div>
            
            <div className="form-group">
              <label>Sponsor Name</label>
              <input
                type="text"
                name="sponsorName"
                value={formData.sponsorName}
                onChange={handleInputChange}
                placeholder="e.g., TechCorp Solutions"
              />
            </div>

            <div className="form-group">
              <label>Sponsor Icon URL</label>
              <input
                type="url"
                name="sponsorIcon"
                value={formData.sponsorIcon}
                onChange={handleInputChange}
                placeholder="https://example.com/sponsor-icon.png"
              />
            </div>

            <div className="form-group full-width">
              <label>Sponsor Banner URL</label>
              <input
                type="url"
                name="sponsorBanner"
                value={formData.sponsorBanner}
                onChange={handleInputChange}
                placeholder="https://example.com/sponsor-banner.png"
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit">
              {editingEvent ? 'Update Event' : 'Add Event'}
            </button>
            <button type="button" className="btn-cancel" onClick={resetForm}>
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="items-grid">
        {events.map((event) => (
          <div key={event.id} className="item-card">
            <div className="item-image">
              <img src={event.image} alt={event.title} />
              <span className="item-badge">{event.category}</span>
            </div>
            <div className="item-content">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div className="item-meta">
                <span><i className="fas fa-calendar"></i> {event.date}</span>
                {event.time && <span><i className="fas fa-clock"></i> {event.time}</span>}
                <span><i className="fas fa-map-marker-alt"></i> {event.location}</span>
              </div>
              {eventType === 'upcoming' && event.capacity && (
                <div className="event-capacity">
                  <div className="capacity-bar">
                    <div 
                      className="capacity-fill" 
                      style={{width: `${(event.registered / event.capacity) * 100}%`}}
                    ></div>
                  </div>
                  <span className="capacity-text">
                    {event.registered} / {event.capacity} registered
                  </span>
                </div>
              )}
              <div className="item-actions">
                <button className="btn-edit" onClick={() => handleEdit(event)}>
                  <i className="fas fa-edit"></i> Edit
                </button>
                <button className="btn-delete" onClick={() => handleDelete(event.id)}>
                  <i className="fas fa-trash"></i> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {events.length === 0 && (
        <div className="empty-state">
          <i className="fas fa-calendar-times"></i>
          <p>No {eventType} events yet. Add your first event!</p>
        </div>
      )}
    </div>
  );
}

export default EventAdmin;
