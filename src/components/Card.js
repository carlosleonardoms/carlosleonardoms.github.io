import React from "react";
import './Card.css'

function Card({
    name,
    imageSrc,
    info,
    link,
}){

    return(
    <a href={link} rel="noopener noreferrer" target="_blank" className="link">
        <div className="card-wrapper">
            <div className="card-img-wrapper">
                <img alt="Project Card" src={imageSrc} className="card-img"/>
            </div>
            <div className="row">
                <div className="card-title">{name}</div>     
            </div>
            <div className="row">
                <div className="card-info">{info}</div>     
            </div>
        </div>
    </a>
     
    )
}

export default Card;