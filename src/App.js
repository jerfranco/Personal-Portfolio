import React from 'react';
import './style.css'; // Make sure to import your stylesheet

// imported images and saved to variables
import myImage from './IMG_4530.jpg';
import githubImage from './github-mark-white.png';
import linkedIn from './In-White-128@2x.png';
import Gmail from './gmail-icon-transparent-4-3130333760.png';
import classRoulette from './classroulettelogo.png';
// import BoxSection from './BoxSection';

function App() {
  return (
    <>
    <header>
      <nav>
        <li>Jeremiah Franco</li>
        <li id="major">Computer Science Student</li>
      </nav>
    </header>
      <main>
        <div id="start">
          <div id="introduction">
            {/* Display name */}
		        <img src={myImage} alt="Jeremiah Franco" />
            <div id="hello">
              <h1 id="name">Jeremiah Franco</h1>
            </div> 
          </div>
        </div>
        {/* About me description */}
        <div id="description">
          <h2>About Me</h2>
          <p id="about">I love dealing with computer systems, software and programming. 
          I am currently a student studying Computer Science at Brigham
          Young University - Idaho. I believe that with the technology rising and improving every single day,
          we can use technology to help those who are in need and to make the world a better place!
          I'm always willing to learn more about the programming world and am excited to get to help expand
          the ever growing tech environment!</p>
        </div>
          {/* Contact me section */}
          <div id="box">
            <h1>Contact Me</h1>
            <div id="section">
            <div className="box-section">
              {/* Github */}
              <h2>GitHub</h2>
              <a href="https://github.com/jerfranco?tab=repositories" target="blank">
                <img src={githubImage} alt="GitHub Logo" />
              </a>
            </div>
            <div className="box-section">
              {/* LinkedIn */}
              <h2>LinkedIn</h2>
              <a href="https://www.linkedin.com/in/jeremiah-franco-896a46275/" target="_blank">
                <img src={linkedIn} alt="LinkedIn Logo" />
              </a>
            </div>
            <div className="box-section">
              {/* Gmail */}
              <h2>Class Roulette</h2>
              <a href="https://classroulette.netlify.app/" target="_blank">
                <img src={classRoulette} alt="Class Roulette Logo" />
              </a>
            </div>
            </div>
          </div>
      </main>
    </>
  );
}

export default App;
