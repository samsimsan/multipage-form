import React from "react";
import ListItem from "./ListItem";


export default function NavigationPage(props) {



    return <div className="navigationPane">
        <ListItem step='1' pageNum={props.pageNum} title='your info' />
        <ListItem step='2' pageNum={props.pageNum} title='select plan' />
        <ListItem step='3' pageNum={props.pageNum} title='add-ons' />
        <ListItem step='4' pageNum={props.pageNum} title='summary' />
    </div>
}