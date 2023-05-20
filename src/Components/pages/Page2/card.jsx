import React from "react";

export default function card(props) {
    return (
        <div className="cards">
            <img src={props.logo} alt="a png should be here" />
            <div>
                <h3>{props.heading}</h3>
                <p>{props.money}</p>
            </div>
        </div>
    );
}