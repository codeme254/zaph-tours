import React from "react";
import { Twitter, LinkedIn, Facebook } from "../Icons/Icons";

const Member = ({image, name, position, message}) => {
    return(
        <div className="member">
            <div className="member__image">
                <img src={image} alt={`${name} pic`} className="member__image--img" />
            </div>
            <div className="member__body">
            <h5 className="member__name">{name}</h5>
            <h6 className="member__position">{position}</h6>
            <p className="member__message">{message}</p>
            <div className="member__social">
                <a href="/" className="social__link">
                    <Facebook />
                </a>
                <a href="/" className="social__link">
                    <LinkedIn />
                </a>
                <a href="/" className="social__link">
                    <Twitter />
                </a>
            </div>
            </div>
        </div>
    )
}

export default Member;