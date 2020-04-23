import React from "react";
const Nav = () => {
  return (
    <div className="navbar-container">
      <ul>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#blog">Blog</a></li>
        <li className="hire-me"><a href="#contact">Hire me</a></li>
      </ul>
    </div>
  );
};

export default Nav;