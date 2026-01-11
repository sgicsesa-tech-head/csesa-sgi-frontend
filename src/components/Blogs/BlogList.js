
//To handle data + mapping 

import React from "react";
import { BlogCard } from "./BlogCard";
import { blogData } from "../../data/blogData";

const BlogList = () => {
  return (
    <div className="card-container">
      {blogData.map(
        ({ id, image, category, date, title, description, userId, userImg ,userName ,slug}) => (
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
            slug={slug}
          />
        )
      )}
    </div>
  );
};

export default BlogList;
