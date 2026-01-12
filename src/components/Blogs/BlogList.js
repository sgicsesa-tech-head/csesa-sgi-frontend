
//To handle data + mapping 

import React from "react";
import { BlogCard } from "./BlogCard";
import { blogPosts } from "../../data/blogData";
import "./BlogList.css";

const BlogList = () => {
  return (
    <div className="card-container">
      {blogPosts.map(
        ({ id, image, category, date, title, description, userId, userImg ,userName}) => (
          <BlogCard
            key={id}
            userImg={userImg}
            userName={userName}
            userId={userId}
            image={image}
            category={category}
            date={date}
            title={title}
            description={description}
          />
        )
      )}
    </div>
  );
};

export default BlogList;
