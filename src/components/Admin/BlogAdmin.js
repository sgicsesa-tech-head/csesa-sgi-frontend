import React, { useState, useEffect } from 'react';
import './AdminCommon.css';
import { blogData } from '../../data/blogData';

function BlogAdmin() {
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [formData, setFormData] = useState({
    userImg: '',
    userName: 'CSESA SGI',
    userId: 'https://www.instagram.com/csesa_sgi',
    image: '',
    category: 'TECH',
    date: '',
    title: '',
    description: ''
  });

  useEffect(() => {
    setBlogs([...blogData]);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingBlog) {
      // Update existing blog
      setBlogs(blogs.map(blog => 
        blog.id === editingBlog.id 
          ? { ...formData, id: editingBlog.id }
          : blog
      ));
    } else {
      // Add new blog
      const newBlog = {
        ...formData,
        id: blogs.length > 0 ? Math.max(...blogs.map(b => b.id)) + 1 : 1
      };
      setBlogs([...blogs, newBlog]);
    }

    resetForm();
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setFormData(blog);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      setBlogs(blogs.filter(blog => blog.id !== id));
    }
  };

  const resetForm = () => {
    setFormData({
      userImg: '',
      userName: 'CSESA SGI',
      userId: 'https://www.instagram.com/csesa_sgi',
      image: '',
      category: 'TECH',
      date: '',
      title: '',
      description: ''
    });
    setEditingBlog(null);
    setShowForm(false);
  };

  return (
    <div className="admin-section">
      <div className="section-header">
        <h2>Manage Blogs</h2>
        <button className="btn-add" onClick={() => setShowForm(!showForm)}>
          <i className="fas fa-plus"></i>
          {showForm ? 'Cancel' : 'Add Blog'}
        </button>
      </div>

      {showForm && (
        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Title *</label>
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
                <option value="TECH">TECH</option>
                <option value="CLUB NEWS">CLUB NEWS</option>
                <option value="EVENTS">EVENTS</option>
                <option value="TUTORIALS">TUTORIALS</option>
              </select>
            </div>

            <div className="form-group">
              <label>Reading Time *</label>
              <input
                type="text"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                placeholder="e.g., 5-6 min read"
                required
              />
            </div>

            <div className="form-group">
              <label>User Name</label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group full-width">
              <label>Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="3"
                required
              />
            </div>

            <div className="form-group full-width">
              <label>Cover Image URL *</label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>

            <div className="form-group full-width">
              <label>User Image URL</label>
              <input
                type="url"
                name="userImg"
                value={formData.userImg}
                onChange={handleInputChange}
                placeholder="https://example.com/avatar.jpg"
              />
            </div>

            <div className="form-group full-width">
              <label>User Profile Link</label>
              <input
                type="url"
                name="userId"
                value={formData.userId}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit">
              {editingBlog ? 'Update Blog' : 'Add Blog'}
            </button>
            <button type="button" className="btn-cancel" onClick={resetForm}>
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="items-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="item-card">
            <div className="item-image">
              <img src={blog.image} alt={blog.title} />
              <span className="item-badge">{blog.category}</span>
            </div>
            <div className="item-content">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <div className="item-meta">
                <span><i className="fas fa-clock"></i> {blog.date}</span>
              </div>
              <div className="item-actions">
                <button className="btn-edit" onClick={() => handleEdit(blog)}>
                  <i className="fas fa-edit"></i> Edit
                </button>
                <button className="btn-delete" onClick={() => handleDelete(blog.id)}>
                  <i className="fas fa-trash"></i> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {blogs.length === 0 && (
        <div className="empty-state">
          <i className="fas fa-blog"></i>
          <p>No blogs yet. Add your first blog!</p>
        </div>
      )}
    </div>
  );
}

export default BlogAdmin;
