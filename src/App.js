import React from 'react';

//imported stylesheet
import './styles/App.css';

//beginning of imported icons
import { FaGithubAlt, FaLinkedin, FaReact, FaCss3Alt, FaNodeJs } from "react-icons/fa"
import { IoIosPaper, IoLogoHtml5, IoLogoJavascript } from "react-icons/io"
import { MdEmail } from "react-icons/md"
import { FiSmartphone } from "react-icons/fi"
import { BsDot, BsPuzzle } from "react-icons/bs"
//end of imported icons

//beginning of imported images
import WeTube from "./assets/WeTube.png"
import Irene from "./assets/irene.jpeg"
//end of imported images


function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <img src={Irene} className="pic-irene" alt="Irene" />

        <div className="name-title">
          <p>
            Irene Perez&nbsp;
            <a href="https://github.com/girafffene" target="_blank" rel="noopener noreferrer">
              <FaGithubAlt className="git"/>
            </a>

            <br/>

            Front-End Web Developer
          </p>
          

        </div>

        <a className="email" href="mailto:inreallifeirene@gmail.com" rel="noopener noreferrer">
          <p>
            <MdEmail className="icons" /> inreallifeirene@gmail.com
          </p>
        </a>

        <p className="phone">
          <FiSmartphone className="icons"/> 702<BsDot className="icons" />793<BsDot className="icons" />6054
        </p>

        <a className="linkedin" href="https://www.linkedin.com/in/irene-perez-a65682154/" target="_blank" rel="noopener noreferrer">
          <p>
            <FaLinkedin className="icons" /> irene-perez-a65682154
          </p>
        </a>

        <a className="resume" href="https://demoday.punchcode.org/student/5" target="_blank" rel="noopener noreferrer">
          <p>
            <IoIosPaper className="icons"/> Resume
          </p>
        </a>
      </header>

      <div className="about">
        <h4>About Me</h4>
        <p className="bio-p">
          My name is Irene Perez, I am a passionate frontend web developer always looking for new opportunities and experiences! My works utilize many languages however I specialize in JavaScript, React.js, HTML5, CSS3 and Node.js to develop beautiful web applications. My journey started at PunchCode, an immersive full-time 12 week coding school in Las Vegas, Nevada where it teaches students the fundamentals for a Junior Full Stack Web Developer position. Feel free to contact me if you would like to do any projects together!
        </p>
      </div>

      <div className="projects">
        <h4>Projects</h4>

        <h5 className="project-title">
          <BsPuzzle className="icons" />
          &nbsp;
          <em>
            <a href="https://github.com/girafffene/Group-Project___WeTube" target="_blank" rel="noopener noreferrer">
              WeTube
            </a>
          </em>
        </h5>

        <img className="weTube" src={WeTube} alt="wetube screenshot" />

        <p className="project-p">
          Created a website that allows users to get together and watch YouTube videos without the need for a&nbsp;
          <em>
            "1, 2, 3, START!"
          </em>

          <br/>

          With WeTube, we offer synchronyzed playback and a chat feature so you never miss a thing.
        </p>
      </div>

      <footer>
        <FaReact id="react"/>
        <IoLogoHtml5 id="html" />
        <FaCss3Alt id="css" />
        <IoLogoJavascript id="js" />
        <FaNodeJs id="node"/>
      </footer>
        
    </div>
  );
}

export default App;
