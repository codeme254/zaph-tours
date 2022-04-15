import React from "react";
import { Suitcase } from "../Icons/Icons";

const Tour = ({image, duration, zone, pricing, description}) => {
    return(
        <div className="tour" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .3)),url(${image})`}}>
            {/* <img src={image} alt={zone} className="tour__image" /> */}
            {/* <div className="tour__overlay"></div> */}
            <span className="tour__duration">{duration}</span>
            <h2 className="tour__title">{zone}</h2>
            <p className="tour__pricing">{pricing}</p>
            <p className="tour__description">{description} <span className="tour__svg"><Suitcase /></span></p>
            <a href="/" className="tour__button">learn more and book tour</a>
        </div>
    )
}

export default Tour;