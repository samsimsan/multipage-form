import React from "react";

export default function PersonalInfo() {
    return (
        <form>
            <label for="username">Name</label>
            <input type="text" name="username" />
            <label for="email">Email Address</label>
            <input type="email" name="email" />
            <label for="phone">Phone Number</label>
            <input type="number" name="phone" />
        </form>
    );
}