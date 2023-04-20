import React from "react";
import "./Content.css";
import Contact from "./Contact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faPhp, faReact, faLaravel, faJsSquare} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

function Content(){
    return(
        <div className="content-wrapper">
            <div className="content-title">
                <h1> Software Developer</h1>
            </div>
            <div className="main-content">
                <div className="content-img-wrapper animated-content">
                    <img alt="me" src="/about.jpg" className="content-img"/>
                    <div class="square-photo"></div>
                </div>
                <div className="content-info animated-content">
                    <h2> From Brazil to the World</h2>
                    <p>
                        Hello! My name is Carlos and I enjoy creating things that live online.
                        I have started learning web devolpment by doing multiple courses online, for both front and back end.
                         Since then, I have developed applications with 
                        <span className="bold"> HTML, CSS, PHP, React, Laravel, MYSQL, and JavaScript. </span>
                        My journey and knowledge have since then been exercised when I enrolled in a <span className="bold">technical high school on software development</span> in Brazil.
                         Currently, I'm focused on building accessible, modern applications.
                    </p>
                </div>
            </div>
            <div className="skills-section">
                <h2 className="skills-title">Skills (Developer's Arsenal)</h2>
                <div className="skills-list">                     
                <FontAwesomeIcon icon={faHtml5} size="3x" color="rgb(118, 0, 0)" />
                <FontAwesomeIcon icon={faCss3Alt} size="3x" color="rgb(118, 0, 0)" />
                <FontAwesomeIcon icon={faPhp} size="3x" color="rgb(118, 0, 0)" />
                <FontAwesomeIcon icon={faReact} size="3x" color="rgb(118, 0, 0)" />
                <FontAwesomeIcon icon={faLaravel} size="3x" color="rgb(118, 0, 0)" />
                <FontAwesomeIcon icon={faDatabase} size="3x" color="rgb(118, 0, 0)" />
                <FontAwesomeIcon icon={faJsSquare} size="3x" color="rgb(118, 0, 0)" />
                </div>
            </div>
           
            <Contact/>
        </div>
    );
}

export default Content;