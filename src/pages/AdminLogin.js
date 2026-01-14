import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

function AdminLogin() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simple authentication (replace with actual authentication in production)
    // Default credentials: admin / admin123
    setTimeout(() => {
      if (credentials.username === 'admin' && credentials.password === 'admin123') {
        // Store authentication token
        localStorage.setItem('adminAuth', 'true');
        localStorage.setItem('adminUsername', credentials.username);
        navigate('/admin');
      } else {
        setError('Invalid username or password');
        setLoading(false);
      }
    }, 800);
  };

  return (
    <div className="admin-login-container">
      <div className="login-box">
        <div className="login-header">
          <div className="login-icon">
            <i className="fas fa-shield-alt"></i>
          </div>
          <h1>Admin Login</h1>
          <p>Enter your credentials to access the admin panel</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="username">
              <i className="fas fa-user"></i>
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleInputChange}
              placeholder="Enter your username"
              required
              autoComplete="username"
            />
          </div>

          <div className="form-field">
            <label htmlFor="password">
              <i className="fas fa-lock"></i>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
              autoComplete="current-password"
            />
          </div>

          {error && (
            <div className="error-message">
              <i className="fas fa-exclamation-circle"></i>
              {error}
            </div>
          )}

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i>
                Authenticating...
              </>
            ) : (
              <>
                <i className="fas fa-sign-in-alt"></i>
                Login
              </>
            )}
          </button>
        </form>

        <div className="login-footer">
          <p className="demo-credentials">
            <i className="fas fa-info-circle"></i>
            Demo: admin / admin123
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
