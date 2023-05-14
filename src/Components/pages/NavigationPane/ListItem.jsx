import React from "react";

export default function ListItem(props) {
    return (
        <div className="ListItem">
            <h2 className="number">{props.step}</h2>
            <p className="stepCount">step {props.step}</p>
            <h2 className="stepTitle">{props.title}</h2>
        </div>
    );
}