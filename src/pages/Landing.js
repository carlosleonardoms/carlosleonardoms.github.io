import React from "react";
import './Landing.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

function LandingPage() {
  return (
    <div className="LandingPage">
      <header className="LandingPage-header fade-in">
        <Link to={'/Portfolio'}>
          
          <h2 className="shadow">
            <div className="landing-img-wrapper">
            <img className="img" src={process.env.PUBLIC_URL + "/landing.jpg"} alt="profile pic"/>
          </div>
            CARLOS MAIOR.    
          </h2>
          <h3 className="shadow">Web Developer</h3>
          
        </Link>
        <div className="icons-wrapper">
          <a href="https://github.com/carlosleonardoms" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} size="1x" color="rgb(118, 0, 0)" /></a>
          <a href="https://www.linkedin.com/in/carlosleonardoms/?originalSubdomain=ca" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="1x" color="rgb(118, 0, 0)" /></a>  
        </div>  
      </header>
    </div>
  );
}

export default LandingPage;