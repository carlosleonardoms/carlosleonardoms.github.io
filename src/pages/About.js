import React from "react";
import Header from "../components/Header";
import Content from '../components/Content';
import withScrollToTop from "../withScrollToTop";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

function About(){
    return(
        <>
            <Header 
            title={"About Me"}
            link={"/Portfolio"}
            nav={"portfolio"}/>

            <Content/>
            <div className="icons-wrapper-bottom">
                <a href="https://github.com/carlosleonardoms" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" color="rgb(118, 0, 0)" /></a>
                <a href="https://www.linkedin.com/in/carlosleonardoms/?originalSubdomain=ca" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" color="rgb(118, 0, 0)" /></a>  
            </div>
        </>
       
    );
}

export default withScrollToTop(About);