import React from "react";
import './Portfolio.css'
import Header from "../components/Header";
import CardGrid from '../components/CardGrid'
import withScrollToTop from "../withScrollToTop";
import Contact from "../components/Contact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

function PortfolioPage(){

    return(
        <>
            <Header 
            title={"Portfolio"}
            link={"/About"}
            nav={"About"}/>
            <div className="title-wrap">
                <h1>MY APLICATIONS</h1>
            </div>
            <CardGrid/>
            <div className="spacer">
                <Contact/>
            </div>
            <div className="icons-wrapper-bottom">
                <a href="https://github.com/carlosleonardoms" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" color="rgb(118, 0, 0)" /></a>
                <a href="https://www.linkedin.com/in/carlosleonardoms/?originalSubdomain=ca" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" color="rgb(118, 0, 0)" /></a>  
            </div>
        </>
        
    )
}

export default withScrollToTop(PortfolioPage);