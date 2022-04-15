import React from "react";
import { Suitcase } from "../Icons/Icons";

const Testimony = ({userProfileImage, name, date, testimonyTitle, testimony }) => {
    return(
        <div className="testimony" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .3)),url(${userProfileImage})`}}>
                <div className="testimony__icon">
                    <Suitcase />
                </div>
            <div className="testimony__body">
                <div className="testimony__name-date">
                    <p className="testimony__name-date--name">{name}</p>
                    <p className="testimony__name-date--date">{date}</p>
                </div>
                <h3 className="testimony__title">{`"${testimonyTitle}"`}</h3>
                <p className="testimony__text">{testimony}</p>
            </div>
        </div>
    )
}

export default Testimony;