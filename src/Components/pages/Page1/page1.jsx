import React from "react";
import PersonalInfo from "./PersonalInfo";

export default function Page1(props) {
    return (
        <div className="pages">
            <PersonalInfo test1={props.test}/>
        </div>
    );
}