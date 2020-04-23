import React from 'react';
import './App.scss';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <Projects/>
      <Blog/>
    </div>
  );
}

export default App;
