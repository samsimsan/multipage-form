import React from "react";
import PersonalInfo from "./PersonalInfo";
import Button from "../Button";

export default function Page1() {
    return (
        <div className="page1 pages">
            <PersonalInfo />
            <Button class="submit" text="Next Step" />
        </div>
    );
}