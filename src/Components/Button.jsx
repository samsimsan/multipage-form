import React from "react";

export default function Button(props) {

    return <button onClick={() => {
        props.Clicked((props.pageNum+1)%5)
    }} className={props.class}>{props.text}</button>
}