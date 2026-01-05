import React from 'react';
import HeroSection from '../components/HeroSection';
import UpcomingEvents from '../components/UpcomingEvents';
import BlogSection from '../components/BlogSection';
import AboutSection from '../components/AboutSection';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <UpcomingEvents />
      <BlogSection />
      <AboutSection />
    </div>
  );
};

export default Home;