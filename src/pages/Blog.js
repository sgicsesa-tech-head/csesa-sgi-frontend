// src/pages/Blog.js

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Blog.css";

import BlogList from "../components/Blogs/BlogList";
import { blogData } from "../data/blogData";
import Skeleton from "../components/Common/Skeleton";

const Blog = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading for single blog view
    if (slug) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [slug]);

  //Single Blog View
  if (slug) {
    const blog = blogData.find(
      (item) => item.slug === slug
    );

    if (!blog) {
      return <h2 style={{ color: "#fff" }}>Blog not found</h2>;
    }

    const { title, image, userName, date, content,userId, userImg } = blog;

    if (loading) {
      return (
        <div className="page">
          <div className="blog-detail-container">
            <div className="aboutUser">
              <Skeleton variant="circle" width="40px" height="40px" />
              <Skeleton width="120px" height="16px" />
            </div>
            <Skeleton width="80%" height="40px" style={{ marginTop: '20px', marginBottom: '20px' }} />
            <Skeleton width="100%" height="400px" style={{ borderRadius: '12px' }} />
            <Skeleton width="100px" height="16px" style={{ marginTop: '16px' }} />
            <div style={{ marginTop: '24px' }}>
              <Skeleton width="100%" height="16px" />
              <Skeleton width="100%" height="16px" />
              <Skeleton width="100%" height="16px" />
              <Skeleton width="90%" height="16px" />
              <Skeleton width="100%" height="16px" />
              <Skeleton width="95%" height="16px" />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="page">
        
          <div className="blog-detail-container">
          <a href={userId}>
          <div className="aboutUser">
            <img className="userPic" src={userImg} alt="user" />
            <span className="userName">{userName}</span>
          </div>
          </a>          
            <h1>{title}</h1>
            <img src={image} alt={title} />
            <span className="date">{date}</span>

            {content.split("\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <Link to="/blog" className="back-link">
              <span className="arrow">←</span> Back to Blogs
            </Link>
          </div>
        
      </div>
    );
  }

  // Blog List View
  return (
    <div className="page">
    <section className="blog-content">
        <BlogList />
      </section>
    </div>
  );
};

export default Blog;
