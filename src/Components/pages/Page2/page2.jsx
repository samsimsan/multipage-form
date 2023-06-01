import React from "react";
import PageHeading from "../../PageHeading";
import Card from "./card";
import arcade from "../../../images/icon-arcade.svg"
import advanced from "../../../images/icon-advanced.svg"
import pro from "../../../images/icon-pro.svg"
import CheckedButton from "../../Buttons/CheckedButton"

export default function Page2(props) {
    return (
        <div className="pages">
            <PageHeading heading="Select you plan" para="You have the option of monthly or yearly billing." />
            <div className="cardsContainer">
                <Card money="$9/mo" logo={arcade} heading="Arcade" />
                <Card money="$12/mo" logo={advanced} heading="advanced" />
                <Card money="$15/mo" logo={pro} heading="pro" />
            </div>
            <CheckedButton />
        </div>
    );
}