import React from "react";
import "./Blog.scss";
import Right from "../assets/right.png";

function Article({ title, link, date }) {
  return (
    <div className="article" id="blog">
      <div className="date">
        <span>{date}</span>
      </div>
      <div className="title">
        <a href={link}>{title}</a>
      </div>
      <div className="link">
        <a href={link}>
          <img src={Right} alt="arrow" />
        </a>
      </div>
    </div>
  );
}

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="left">
        <span>Blog</span>
        <h2>What's new?</h2>
        <h2>My blog and new</h2>
      </div>
      <div className="right">
        <Article title="We created a Covid-19 Tracking dashboard" link="https://hackernoon.com/we-created-a-covid19-tracking-dashboard-4d3n3ylw" date="April 16th 2020" />
        <Article title="Little Dev Tools in Your Pockets" link="https://hackernoon.com/little-dev-tools-in-your-pockets-0h2q3yhi" date="March 15th 2020" />
        <Article title="Optimize Your CSS Length with CSS Variables" link="https://hackernoon.com/optimize-your-css-length-with-css-variables-mz2i3aqy" date="February 15th 2020" />
      </div>
    </div>
  );
};
export default Blog;
