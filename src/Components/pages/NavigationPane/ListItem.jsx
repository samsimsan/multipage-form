import React from "react";

export default function ListItem(props) {

    const style = props.pageNum === props.step ?
        {
            backgroundColor: "var(--Lightblue)",
            color: "black",
            borderColor: "var(--Lightblue)"
        } : {};

    return (
        <div className="ListItem" >
            <h2 className="number" style={style}>{props.step}</h2>
            <p className="stepCount">step {props.step}</p>
            <h2 className="stepTitle">{props.title}</h2>
        </div>
    );
}