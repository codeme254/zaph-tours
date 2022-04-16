import React from "react";

const Feature = ({icon, title, text})=> {
    return(
        <div className="feature-sm">
            <div className="feature-sm__icon">
                {icon}
            </div>
            <h2 className="feature-sm__title">{title}</h2>
            <p className="feature-sm__text">{text}</p>
        </div>
    )
}

export default Feature;