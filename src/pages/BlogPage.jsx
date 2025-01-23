import React from "react";
import { useParams } from "react-router-dom";
import { blogsData } from "../assets/data/Data"; // Centralized blog data
import "../css/BlogPage.css"

const BlogPage = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const blog = blogsData.find((item) => item.slug === slug); // Find the blog with the matching slug

  if (!blog) {
    return <div>Blog not found!</div>; // Handle invalid slugs
  }

  return (
    <div className="blog-page">
      <div className="container">
      <img src={blog.img} alt={blog.title} className="blog-image" />
        <span className="blog-event-date">
        <strong>Blog</strong> | {blog.date}
        </span>
        <h1 className="secondry-heading">{blog.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
      </div>
    </div>
  );
};

export default BlogPage;
