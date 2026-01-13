import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Loader from './components/Common/Loader';
import Navbar from './components/Common/navbar';
import Footer from './components/Common/Footer';
import Home from './pages/home';
import About from './pages/About';
import Events from './pages/Events';
import UpcomingEventsPage from './pages/UpcomingEventsPage';
import PastEventsPage from './pages/PastEventsPage';
import EventDetailPage from './pages/EventDetailPage';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set timer for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); //seconds in milliseconds

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/upcoming" element={<UpcomingEventsPage />} />
          <Route path="/events/past" element={<PastEventsPage />} />
          <Route path="/events/:type/:id" element={<EventDetailPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
