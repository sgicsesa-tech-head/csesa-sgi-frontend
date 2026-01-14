// src/pages/Blog.js

import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Blog.css";

import BlogList from "../components/Blogs/BlogList";
import { blogData } from "../data/blogData";

const Blog = () => {
  const { slug } = useParams();

  //Single Blog View
  if (slug) {
    const blog = blogData.find(
      (item) => item.slug === slug
    );

    if (!blog) {
      return <h2 style={{ color: "#fff" }}>Blog not found</h2>;
    }

    const { title, image, userName, date, content,userId, userImg } = blog;

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
