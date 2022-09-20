import "./App.css";
import React from "react";
import Meimg from "./assets/me pics.jpeg"
import me2 from "./assets/me 3.jpeg"

const App = () => {
  return (
    <div>
      <div className="introDiv">
        <p>Hello i'm</p>
        <h2>Emenike Onyedikachi</h2>
        <p>FrontEnd web developer</p>
        <div className="flexCV">
          <a href="./assets/CV.pdf" download class="DownloadCv">
            Download CV
          </a>
          <a href="mailto:semenike60@gmail.com">Let's Talk</a>
        </div>
        <div className="mediv">
          <img className="meimg" src={Meimg} alt/>
        </div>
      </div>
      <div className="Aboutme">
        <h4>Get to know about me</h4>
        <div className="divme">
          <img className="me2" src={me2} alt="" />
        </div>
        <div className="aboutbox">
          <div className="aboutboxs">
            <h6>Experience</h6>
            <p>1+ Working</p>
          </div>
          <div className="aboutboxs" id="projects">
            <h6>Projects</h6>
            <p>10+ projects</p>
          </div>
          <div className="aboutboxs" id="projects">
            <h6>Lorem</h6>
            <p>Lorem ipsum dolor sit amet consectetur ui?</p>
          </div>

          <div className="aboutboxs" id="projects">
            <h6>Lorem</h6>
            <p>Lorem ipsum dolor sit amet consectetur ui?</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            error officiis eos soluta veniam illo, quisquam mollitia, voluptatum
            architecto, cum at explicabo rerum similique praesentium laborum
            repellendus tenetur ipsum a?
          </p>
          <a href="#">Let's Talk</a>
        </div>
        <div className="SkillDiv">
          <p>what skill i have</p>
          <h6>My experience</h6>
          <div>
            <h5>FrontEnd Development</h5>
            <ul className="ulskill">
              <li>
                <h5>HTML</h5>
                <p>Experienced</p>
              </li>

              <li>
                <h5>CSS</h5>
                <p>Experienced</p>
              </li>

              <li>
                <h5>Javascript</h5>
                <p>Experienced</p>
              </li>

              <li>
                <h5>React</h5>
                <p>Intermediate</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="Contactme">
          <div>
            <a href="mailto:semenike60@gmail.com">
              <p>Email</p>
              <p>Semenike60@gmail.com</p>
              <p>Send a message</p>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/onyedikachi-emenike-35877420a">
              <p>linkedin</p>
              <p>onyedikachi-emenike</p>
              <p>Send a message</p>
            </a>
          </div>
          <div>
            <a href="tel:+2349139052937">
              <p>whatsapp</p>
              <p>+2349139052937</p>
              <p>Send a message</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
