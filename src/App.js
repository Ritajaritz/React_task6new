import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>Your Name</h1>
        <p>Ritaja Dey</p>
      </header>
      <section>
        <h2>About Me</h2>
        <p>I am a Web Development Enthuciast and currently pursuing 3rd Btech Degree in Vellore Institute Of Technology. I live in West Benghal, kolkata. I have deep interest in coding and hope to build great websites </p>
      </section>
      <section>
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of Project 1</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of Project 2</p>
        </div>
      </section>
      <section>
        <h2>Contact</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: linkedin.com/in/your-profile</p>
      </section>
    </div>
  );
};

export default App;
