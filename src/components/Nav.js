import React from "react";
import MenuPng from "../assets/menu.png";
const Nav = () => {
  const close = ()=>{
    menuList.current.style='left:-500px'
  }
  const openMenu =()=>{
    menuList.current.style='left:-90px'

  }
  const menuList = React.createRef()
  const checkBox = React.createRef()
  console.log(checkBox.current);
  return (
    <div className="navbar-container">
      <ul>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li className="hire-me">
          <a href="#contact">Hire me</a>
        </li>
      </ul>
      <div className="mobile">
        <h2></h2>
        <label onClick={openMenu} htmlFor="check"><img src={MenuPng} alt="Menu" /></label>
        <ul ref={menuList}>
          <li><h2>{"Edem Agbenyo"} </h2></li>
          <li onClick={close}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={close}>
            <a href="#blog">Blog</a>
          </li>
          <li onClick={close}  className="hire-me">
            <a href="#contact">Hire me</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
