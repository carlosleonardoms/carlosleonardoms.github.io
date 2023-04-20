import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Modal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

export default function Modal(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="modal-wrapper">
      <button onClick={toggleModal} className="btn-modal hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>        
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <button className="close-modal" onClick={toggleModal}>×</button>
            <h2 className="modal-title">My Work</h2>
            <ul className="modal-list">
                <li><Link to={'/'} >Home</Link></li>
                <li><Link to={props.link} >{props.nav}</Link></li>
            </ul>
            <div className="icons-wrapper-modal">
                <a href="https://github.com/carlosleonardoms" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" color="rgb(118, 0, 0)" /></a>
                <a href="https://www.linkedin.com/in/carlosleonardoms/?originalSubdomain=ca" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" color="rgb(118, 0, 0)" /></a>  
            </div>
          </div>
        </div>
      )}
    </div>
  );
}