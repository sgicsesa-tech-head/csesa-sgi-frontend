
//BlogCard Component


import "./BlogCard.css";
import React from "react";
import { Link } from "react-router-dom";


export const BlogCard = ({
  userImg,
  userId,
  userName,
  image,
  category,
  date,
  title,
  description,
  slug
}) => {
  return (
    <>
      <div className="card ">
        <a href={userId}>
          <div className="aboutUser">
            <img className="userPic" src={userImg} alt="user" />
            <span className="userName">{userName}</span>
          </div>
        </a>
          

          <img className="card-img" src={image} alt="img Misssing" />
          <div className="aboutPost">
            <span className="blog-category">{category}</span>
            <span className="date">{date}</span>
          </div>
        
        <a href="">
          <h5 className="card-title">{title}</h5>
        </a>
        <p className="card-text">{description}</p>
        <div className="card-footer">
         <Link to={`/blog/${slug}`} className="read-more">
           Read More →
         </Link>

        </div>
      </div>
    </>
  );
};
