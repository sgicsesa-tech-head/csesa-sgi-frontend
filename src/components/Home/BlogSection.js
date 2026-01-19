import React, { useState, useEffect } from 'react';
import ComputerIcon from '@mui/icons-material/Computer';
import MicIcon from '@mui/icons-material/Mic';
import ArticleIcon from '@mui/icons-material/Article';
import { BlogPostSkeleton } from '../Common/Skeleton';
import './BlogSection.css';

const BlogSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const blogPosts = [
    {
      id: 1,
      category: 'TECH',
      readTime: '5-6 min read',
      title: 'Understanding System Design Patterns',
      description: 'A comprehensive guide for beginners to understand scalable architecture and prepare for interviews.',
      icon: <ComputerIcon sx={{ fontSize: 40 }} />,
      bgColor: '#1a2332'
    },
    {
      id: 2,
      category: 'CLUB NEWS',
      readTime: '3 min read',
      title: 'Highlights from the Argue-Mind',
      description: 'A recap of our recent debate competition where students showcased their critical thinking and public speaking skills.',
      icon: <MicIcon sx={{ fontSize: 40 }} />,
      bgColor: '#2a2a2a'
    },
    {
      id: 3,
      category: 'CLUB NEWS',
      readTime: '4 min read',
      title: 'CSESA Inauguration',
      description: 'Kickstarting a new chapter of tech enthusiasm at SGI with workshops, hackathons, and more.',
      icon: <ArticleIcon sx={{ fontSize: 40 }} />,
      bgColor: '#2a2a2a'
    }
  ];

  if (loading) {
    return (
      <section className="blog-section">
        <div className="blog-header">
          <div>
            <h2 className="section-title">From the Blog</h2>
            <p className="section-subtitle">
              Insights from our student community.
            </p>
          </div>
          <a href="/blog" className="view-all-link">
            View Articles →
          </a>
        </div>
        <div className="blog-grid">
          <div className="featured-post">
            <BlogPostSkeleton />
          </div>
          <div className="small-posts">
            <BlogPostSkeleton />
            <BlogPostSkeleton />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="blog-section">
      <div className="blog-header">
        <div>
          <h2 className="section-title">From the Blog</h2>
          <p className="section-subtitle">
            Insights from our student community.
          </p>
        </div>
        <a href="/blog" className="view-all-link">
          View Articles →
        </a>
      </div>
      
      <div className="blog-grid">
        <div className="featured-post">
          <div className="blog-card large">
            <div className="blog-image" style={{ background: blogPosts[0].bgColor }}>
              <span className="blog-emoji">{blogPosts[0].icon}</span>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span className="blog-category">{blogPosts[0].category}</span>
                <span className="blog-separator">•</span>
                <span className="blog-time">{blogPosts[0].readTime}</span>
              </div>
              <h3 className="blog-title">{blogPosts[0].title}</h3>
              <p className="blog-description">{blogPosts[0].description}</p>
              <a href="/blog/1" className="read-more">Read Article →</a>
            </div>
          </div>
        </div>
        
        <div className="small-posts">
          {blogPosts.slice(1).map(post => (
            <div key={post.id} className="blog-card small">
              <div className="blog-image-small" style={{ background: post.bgColor }}>
                <span className="blog-emoji-small">{post.icon}</span>
              </div>
              <div className="blog-content-small">
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-separator">•</span>
                  <span className="blog-time">{post.readTime}</span>
                </div>
                <h4 className="blog-title-small">{post.title}</h4>
                <p className="blog-description-small">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
