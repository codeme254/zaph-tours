import React from "react";

const Heading = ({subHeading, mainHeading, bgText}) => {
    return(
        <h1 className="heading">
            <span className="heading__background">{bgText}</span>
            <span className="heading__sub">{subHeading}</span>
            <span className="heading__main">{mainHeading}</span>
        </h1>
    )
}

export default Heading;