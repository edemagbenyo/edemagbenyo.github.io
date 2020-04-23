import React from "react";
const Nav = () => {
  return (
    <div className="navbar-container">
      <ul>
        <li><a href={"/"}>Projects</a></li>
        <li><a href={"/"}>Blog</a></li>
        <li className="hire-me"><a href={"/"}>Hire me</a></li>
      </ul>
    </div>
  );
};

export default Nav;