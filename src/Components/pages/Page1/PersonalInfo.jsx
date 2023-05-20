import React from "react";
import PageHeading from "../../PageHeading";

export default function PersonalInfo() {
    return (
        <form className="personelInfoForm">
            <PageHeading heading="Personal Info" para="Please provide you name, email address and Phone number." />
            <label for="username">Name</label>
            <input id="username" type="text" name="username" />
            <label for="email">Email Address</label>
            <input id="email" type="email" name="email" />
            <label for="phone">Phone Number</label>
            <input id="phone" type="number" name="phone" required/>
        </form>
    );
}