import React, { useState } from 'react';
import './Admin.css';
import BlogAdmin from '../components/Admin/BlogAdmin';
import EventAdmin from '../components/Admin/EventAdmin';
import MemberAdmin from '../components/Admin/MemberAdmin';

function Admin() {
  const [activeTab, setActiveTab] = useState('blogs');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'blogs':
        return <BlogAdmin />;
      case 'events':
        return <EventAdmin />;
      case 'members':
        return <MemberAdmin />;
      default:
        return <BlogAdmin />;
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <p>Manage your website content</p>
      </div>

      <div className="admin-tabs">
        <button
          className={`admin-tab ${activeTab === 'blogs' ? 'active' : ''}`}
          onClick={() => setActiveTab('blogs')}
        >
          <i className="fas fa-blog"></i>
          Blogs
        </button>
        <button
          className={`admin-tab ${activeTab === 'events' ? 'active' : ''}`}
          onClick={() => setActiveTab('events')}
        >
          <i className="fas fa-calendar"></i>
          Events
        </button>
        <button
          className={`admin-tab ${activeTab === 'members' ? 'active' : ''}`}
          onClick={() => setActiveTab('members')}
        >
          <i className="fas fa-users"></i>
          Members
        </button>
      </div>

      <div className="admin-content">
        {renderTabContent()}
      </div>
    </div>
  );
}

export default Admin;
