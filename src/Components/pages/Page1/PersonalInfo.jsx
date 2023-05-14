import React from "react";

export default function PersonalInfo() {
    return (
        <form className="personelInfoForm">
            <h1 className="p1Heading">Personal Info</h1>
            <p className="p1subHeading">Please provide you name, email address and Phone number.</p>
            <label for="username">Name</label>
            <input id="username" type="text" name="username" />
            <label for="email">Email Address</label>
            <input id="email" type="email" name="email" />
            <label for="phone">Phone Number</label>
            <input id="phone" type="number" name="phone" />
        </form>
    );
}