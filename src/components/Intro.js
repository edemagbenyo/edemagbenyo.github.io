import React from 'react';
import Nav from './Nav';
import Welcome from './Welcome';
import '../styles/Intro.scss';

const  Intro = ()=>{
  return <div className="intro-container">
    <Nav/>
    <Welcome/>
  </div>
}
export default Intro;