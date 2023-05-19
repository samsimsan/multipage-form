import React from "react";

export default function Button1(props) {

    return <button onClick={() => {
        props.Clicked((props.pageNum + props.incOrDec) % 5)
    }} className={props.class}>{props.text}</button>
}