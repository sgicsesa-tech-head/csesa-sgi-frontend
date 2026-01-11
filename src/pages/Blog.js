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

    const { title, image, userName, date, content } = blog;

    return (
      <div className="page">
        <section className="blog-detail">
          <div className="blog-detail-container">
            <Link to="/blog" className="back-link">
              ← Back to Blogs
            </Link>

            <h1>{title}</h1>
            <p className="blog-author">
              {userName} • {date}
            </p>

            <img src={image} alt={title} />

            {content.split("\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>
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
