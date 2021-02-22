import logo from './logo.svg';
import './App.css';
import * as React from "react";
import AboutMeSection from "./AboutMeSection/AboutMeSection.js"
import MyProjectsSection from './MyProjectsSection/MyProjectsSection.js'
function App() {
  console.log(process.env.PUBLIC_URL)
  return (

      <div className="main-container">
        <div className="main-content-section-container">
          <AboutMeSection/>

         <MyProjectsSection/>

          <div className="my-experience-section">
            <h3 className="main-content-title"> Work Experience</h3>

            <div className="my-we-block">
              <h4 className="my-we-position">Office-Manager <span className="my-we-company-orange">Full-Time</span></h4>
              <p className="my-we-time">September 2020 - up to now <span className="my-we-line">|</span> Ukraine, Kyiv
              </p>
              <ul className="my-we-duties">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor
                  et
                  dolore magna aliqua.
                </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Risus commodo viverra maecenas.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>

              </ul>

            </div>

            <div className="my-we-block">
              <h4 className="my-we-position">Manager <span className="my-we-company-orange">Amira LLC</span></h4>
              <p className="my-we-time">April 2019 - June 2020 <span className="my-we-line">|</span> Ukraine, Kyiv</p>
              <ul className="my-we-duties">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore et dolore magna
                  aliqua.
                </li>
                <li> Quis ipsum suspendisse ultrices gravida.</li>
                <li>Risus commodo viverra maecenas.</li>

              </ul>

            </div>

            <div className="my-we-block">
              <h4 className="my-we-position">Incoming Calls Operator <span className="my-we-company-orange"> DMCC "PrivatBank"</span>
              </h4>
              <p className="my-we-time">August 2016 - September 2018 <span className="my-we-line">|</span> Ukraine,
                Vinnytsia</p>
              <ul className="my-we-duties">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore et dolore magna
                  aliqua.
                </li>
                <li> Quis ipsum suspendisse ultrices gravida.</li>
                <li>Risus commodo viverra maecenas.</li>

              </ul>

            </div>

          </div>

          <div className="my-education-container">
            <h3 className="main-content-title">Education</h3>
            <h4 className="my-we-company-orange">Vasyl’ Stus Donetsk National University</h4>
            <h5 className="my-ec-speciality"> Faculty of Math and Computer Science</h5>
            <p className="my-we-time">September 2011 - June 2016 <span className="my-we-line">|</span> Ukraine, Donetsk
              - Ukraine, Vinnytsia</p>
          </div>
        </div>

        <aside className="sidebar-section">
          <img className="my-photo" src={`${process.env.PUBLIC_URL}/photo.jpg`} alt="my photo" />

            <div className="contacts-css">
              <h3 className="sidebar-css">Contacts</h3>
              <div>
                <span className="letter-type">C: </span>
                <a className="link-type" href="tel:+380959082117">+38 095 908 21 17</a>
              </div>
              <div>
                <span className="letter-type"> E:</span>
                <a className="link-type" href="mailto:sovaoliv@gmail.com">sovaoliv@gmail.com</a>
              </div>

            </div>

            <div className="techskills-css">
              <h3 className="sidebar-css">Tech Skills</h3>
              <ul className="li-style">
                <li className="li-item"><span className="span-text">HTML5</span></li>
                <li className="li-item"><span className="span-text">CSS3</span></li>
                <li className="li-item"><span className="span-text">GIT</span></li>
                <li className="li-item"><span className="span-text">WebPack</span></li>
                <li className="li-item"><span className="span-text">JavaScript</span></li>
                <li className="li-item"><span className="span-text">React.js</span></li>
                <li className="li-item"><span className="span-text">Node.js</span></li>
              </ul>
            </div>

            <div className="softskills-css">
              <h3 className="sidebar-css">Soft Skills</h3>
              <ul className="li-style">
                <li className="li-item"><span className="span-text">Scrum</span></li>
                <li className="li-item"><span className="span-text">Agile</span></li>
                <li className="li-item"><span className="span-text">GTD</span></li>
                <li className="li-item"><span className="span-text">Teamwork</span></li>
              </ul>
            </div>
        </aside>
      </div>

  );
}

export default App;
