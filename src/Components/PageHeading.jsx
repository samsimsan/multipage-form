import React from "react";


export default function PageHeading(props) {
    return (
        <div >
            <h1 className="p1Heading">{props.heading}</h1>
            <p className="p1subHeading">{props.para}</p>
        </div>
    );
}