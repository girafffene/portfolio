import React from 'react';

//imported stylesheet
import './styles/App.css';

//beginning of imported icons
import { FaGithubAlt, FaLinkedin, FaReact, FaCss3Alt, FaNodeJs } from "react-icons/fa"
import { IoIosPaper, IoLogoHtml5, IoLogoJavascript } from "react-icons/io"
import { MdEmail } from "react-icons/md"
import { FiSmartphone } from "react-icons/fi"
import { BsDot } from "react-icons/bs"
//end of imported icons

//beginning of imported images
import WeTube from "./assets/WeTube.png"
import Irene from "./assets/irene.jpeg"


function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <img src={Irene} className="pic-irene" alt="Irene" />
        <p>
          Irene Perez
        </p>
        <p>
          Front-End Web Developer
        </p>
        
        <a href="https://github.com/girafffene" target="_blank" rel="noopener noreferrer">
            <FaGithubAlt />
        </a>

      </header>

      <div className="allOnMe">
        <div className="about">
          <h4>About Me</h4>
          <p>
            My name is Irene Perez, I am a passionate frontend web developer always looking for new opportunities and experiences! My works utilize many languages however I specialize in JavaScript, React.js, HTML5, CSS3 and Node.js to develop beautiful web applications. My journey started at PunchCode, an immersive full-time 12 week coding school in Las Vegas, Nevada where it teaches students the fundamentals for a Junior Full Stack Web Developer position. Feel free to contact me if you would like to do any projects together!
          </p>
        </div>

        <div className="projects">
          <h4>Projects</h4>
          <h5>WeTube</h5>

          <p>
            Created a website that allows users to get together and watch YouTube videos without the need for a&nbsp;
            <em>
              "1, 2, 3, START!"
            </em>
          </p>

          <p>
            With WeTube, we offer synchronyzed playback and a chat feature so you never miss a thing.
          </p>

          <img className="weTube" src={WeTube} alt="wetube screenshot" />

        </div>

        <div className="contact">
          <h4 className="contactTitle">Get In Touch</h4>

          <a className="resume" href="https://demoday.punchcode.org/student/5" target="_blank" rel="noopener noreferrer">
            <p>
              <IoIosPaper/> Resume
            </p>
          </a>

          <a className="email" href="mailto:inreallifeirene@gmail.com" rel="noopener noreferrer">
            <p>
              <MdEmail /> inreallifeirene@gmail.com
            </p>
          </a>

          <p className="phone">
            <FiSmartphone /> 702<BsDot />793<BsDot />6054
          </p>

          <a className="github" href="https://github.com/girafffene" target="_blank" rel="noopener noreferrer">
            <FaGithubAlt /> girafffene
          </a>

          <a className="linkedin" href="https://www.linkedin.com/in/irene-perez-a65682154/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> irene-perez-a65682154
          </a>

        </div>

        <footer>
          <FaReact />
          <IoLogoHtml5 />
          <FaCss3Alt />
          <IoLogoJavascript />
          <FaNodeJs />
        </footer>
        
      </div>
    </div>
  );
}

export default App;
