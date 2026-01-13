import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import UpcomingEvents from '../components/Home/UpcomingEvents';
import CurrentBatch from '../components/Home/CurrentBatch';
import BlogSection from '../components/Home/BlogSection';
import AboutSection from '../components/Home/AboutSection';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <UpcomingEvents />
      <CurrentBatch />
      <BlogSection />
      <AboutSection />
    </div>
  );
};

export default Home;