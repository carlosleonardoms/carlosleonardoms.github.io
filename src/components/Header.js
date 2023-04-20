import React from "react";
import './Header.css'
import { Link } from "react-router-dom";
import Modal from "./Modal";

function Header(props){

    return(
     <header className="header-wrapper">
         <div className="header">
             <h1 className="title">{props.title}</h1>
             <nav>
                 <ul className="nav-menu">
                     <li><Link to={'/'}>Home</Link></li>
                     <li><Link to={props.link}>{props.nav}</Link></li>
                 </ul>
             </nav>
         </div>
         <Modal 
         link={props.link}
         nav={props.nav}/>
    </header>
    )
}

export default Header;