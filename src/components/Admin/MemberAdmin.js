import React, { useState, useEffect } from 'react';
import './AdminCommon.css';
import { membersData } from '../../data/membersData';

function MemberAdmin() {
  const [selectedYear, setSelectedYear] = useState('2025-26');
  const [members, setMembers] = useState({});
  const [showMemberForm, setShowMemberForm] = useState(false);
  const [showYearForm, setShowYearForm] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [newYear, setNewYear] = useState('');
  const [memberFormData, setMemberFormData] = useState({
    name: '',
    role: '',
    image: '',
    division: '',
    order: 9
  });

  useEffect(() => {
    setMembers({ ...membersData });
  }, []);

  const handleMemberInputChange = (e) => {
    const { name, value } = e.target;
    setMemberFormData(prev => ({
      ...prev,
      [name]: name === 'order' ? parseInt(value) : value
    }));
  };

  const handleMemberSubmit = (e) => {
    e.preventDefault();
    
    const updatedMembers = { ...members };
    const yearMembers = updatedMembers[selectedYear] || [];

    if (editingMember) {
      updatedMembers[selectedYear] = yearMembers.map(member =>
        member.id === editingMember.id
          ? { ...memberFormData, id: editingMember.id }
          : member
      );
    } else {
      const newMember = {
        ...memberFormData,
        id: yearMembers.length > 0 ? Math.max(...yearMembers.map(m => m.id)) + 1 : 1
      };
      updatedMembers[selectedYear] = [...yearMembers, newMember];
    }

    setMembers(updatedMembers);
    resetMemberForm();
  };

  const handleEditMember = (member) => {
    setEditingMember(member);
    setMemberFormData({
      name: member.name || '',
      role: member.role || '',
      image: member.image || '',
      division: member.division || '',
      order: member.order || 9
    });
    setShowMemberForm(true);
  };

  const handleDeleteMember = (id) => {
    if (window.confirm('Are you sure you want to delete this member?')) {
      const updatedMembers = { ...members };
      updatedMembers[selectedYear] = members[selectedYear].filter(member => member.id !== id);
      setMembers(updatedMembers);
    }
  };

  const resetMemberForm = () => {
    setMemberFormData({
      name: '',
      role: '',
      image: '',
      division: '',
      order: 9
    });
    setEditingMember(null);
    setShowMemberForm(false);
  };

  const handleAddYear = (e) => {
    e.preventDefault();
    if (newYear && !members[newYear]) {
      setMembers({
        ...members,
        [newYear]: []
      });
      setSelectedYear(newYear);
      setNewYear('');
      setShowYearForm(false);
    }
  };

  const handleDeleteYear = (year) => {
    if (window.confirm(`Are you sure you want to delete the batch ${year}? This will remove all members in this batch.`)) {
      const updatedMembers = { ...members };
      delete updatedMembers[year];
      setMembers(updatedMembers);
      if (selectedYear === year) {
        const years = Object.keys(updatedMembers);
        setSelectedYear(years[0] || '');
      }
    }
  };

  const roleOrder = {
    'President': 1,
    'Vice President': 2,
    'General Secretary': 3,
    'Treasurer': 4,
    'Technical Head': 5,
    'Cultural Head': 6,
    'Social Outreach Head': 7,
    'Public Relations Officer': 8,
    'Executive Member': 9
  };

  const getSortedMembers = () => {
    if (!members[selectedYear]) return [];
    return [...members[selectedYear]].sort((a, b) => {
      if (a.order !== b.order) return a.order - b.order;
      return roleOrder[a.role] - roleOrder[b.role];
    });
  };

  return (
    <div className="admin-section">
      <div className="section-header">
        <h2>Manage Members</h2>
        <div className="header-actions">
          <select 
            className="event-type-select"
            value={selectedYear} 
            onChange={(e) => {
              setSelectedYear(e.target.value);
              setShowMemberForm(false);
              resetMemberForm();
            }}
          >
            {Object.keys(members).sort().reverse().map(year => (
              <option key={year} value={year}>Batch {year}</option>
            ))}
          </select>
          <button className="btn-add" onClick={() => setShowYearForm(!showYearForm)}>
            <i className="fas fa-calendar-plus"></i>
            {showYearForm ? 'Cancel' : 'Add Batch'}
          </button>
          <button className="btn-add" onClick={() => setShowMemberForm(!showMemberForm)}>
            <i className="fas fa-user-plus"></i>
            {showMemberForm ? 'Cancel' : 'Add Member'}
          </button>
          {Object.keys(members).length > 1 && (
            <button className="btn-delete" onClick={() => handleDeleteYear(selectedYear)}>
              <i className="fas fa-trash"></i>
              Delete Batch
            </button>
          )}
        </div>
      </div>

      {showYearForm && (
        <form className="admin-form batch-form" onSubmit={handleAddYear}>
          <div className="form-group">
            <label>New Batch Year *</label>
            <input
              type="text"
              value={newYear}
              onChange={(e) => setNewYear(e.target.value)}
              placeholder="e.g., 2026-27"
              pattern="\d{4}-\d{2}"
              title="Format: YYYY-YY (e.g., 2026-27)"
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-submit">
              Add Batch
            </button>
            <button type="button" className="btn-cancel" onClick={() => setShowYearForm(false)}>
              Cancel
            </button>
          </div>
        </form>
      )}

      {showMemberForm && (
        <form className="admin-form" onSubmit={handleMemberSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                name="name"
                value={memberFormData.name}
                onChange={handleMemberInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Role *</label>
              <select
                name="role"
                value={memberFormData.role}
                onChange={handleMemberInputChange}
                required
              >
                <option value="">Select Role</option>
                <option value="President">President</option>
                <option value="Vice President">Vice President</option>
                <option value="General Secretary">General Secretary</option>
                <option value="Treasurer">Treasurer</option>
                <option value="Technical Head">Technical Head</option>
                <option value="Cultural Head">Cultural Head</option>
                <option value="Social Outreach Head">Social Outreach Head</option>
                <option value="Public Relations Officer">Public Relations Officer</option>
                <option value="Executive Member">Executive Member</option>
              </select>
            </div>

            <div className="form-group">
              <label>Division *</label>
              <input
                type="text"
                name="division"
                value={memberFormData.division}
                onChange={handleMemberInputChange}
                placeholder="e.g., TECSE, SECSE, FECSE"
                required
              />
            </div>

            <div className="form-group">
              <label>Order Priority</label>
              <input
                type="number"
                name="order"
                value={memberFormData.order}
                onChange={handleMemberInputChange}
                min="1"
                max="20"
              />
            </div>

            <div className="form-group full-width">
              <label>Image URL *</label>
              <input
                type="url"
                name="image"
                value={memberFormData.image}
                onChange={handleMemberInputChange}
                placeholder="https://example.com/member-photo.jpg"
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit">
              {editingMember ? 'Update Member' : 'Add Member'}
            </button>
            <button type="button" className="btn-cancel" onClick={resetMemberForm}>
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="members-grid">
        {getSortedMembers().map((member) => (
          <div key={member.id} className="member-card">
            <div className="member-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-division">{member.division}</p>
              <span className="member-order">Priority: {member.order}</span>
            </div>
            <div className="member-actions">
              <button className="btn-edit" onClick={() => handleEditMember(member)}>
                <i className="fas fa-edit"></i>
              </button>
              <button className="btn-delete" onClick={() => handleDeleteMember(member.id)}>
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      {(!members[selectedYear] || members[selectedYear].length === 0) && (
        <div className="empty-state">
          <i className="fas fa-users"></i>
          <p>No members in batch {selectedYear} yet. Add your first member!</p>
        </div>
      )}
    </div>
  );
}

export default MemberAdmin;
