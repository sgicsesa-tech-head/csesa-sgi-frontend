
//To handle data + mapping 

import React, { useState, useEffect } from "react";
import { BlogCard } from "./BlogCard";
import { blogData } from "../../data/blogData";
import { BlogCardSkeleton, SkeletonGrid } from "../Common/Skeleton";
import "./BlogList.css";

const BlogList = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="card-container">
        <SkeletonGrid count={6} Component={BlogCardSkeleton} />
      </div>
    );
  }

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
