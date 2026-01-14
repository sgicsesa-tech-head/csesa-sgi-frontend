import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';
import BlogAdmin from '../components/Admin/BlogAdmin';
import EventAdmin from '../components/Admin/EventAdmin';
import MemberAdmin from '../components/Admin/MemberAdmin';

function Admin() {
  const [activeTab, setActiveTab] = useState('blogs');
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('adminAuth');
      localStorage.removeItem('adminUsername');
      navigate('/admin/login');
    }
  };

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
        <div className="admin-header-content">
          <div>
            <h1>Admin Dashboard</h1>
            <p>Manage your website content</p>
          </div>
          <button className="logout-button" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i>
            Logout
          </button>
        </div>
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
