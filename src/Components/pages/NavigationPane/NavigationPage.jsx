import React from "react";
import ListItem from "./ListItem";


export default function NavigationPage() {
    return <div className="navigationPane">
        <ListItem step='1' title='your info'/>
        <ListItem step='2' title='select plan'/>
        <ListItem step='3' title='add-ons'/>
        <ListItem step='4' title='summary'/>
    </div>
}