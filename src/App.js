import React from 'react';
import './styles/App.scss';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <Projects/>
      <Blog/>
      <Contact/>
    </div>
  );
}

export default App;
