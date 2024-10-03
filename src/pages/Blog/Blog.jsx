import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="about-page container">
      <div className="row h-90">
        <div className="page-heading">
          <h1>
            My <span className="highlight-colour">Blogs</span>
          </h1>
        </div>
        <div>
          <h4 className="text-center soon-msg">
            Great things are coming soon..
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Blog;
