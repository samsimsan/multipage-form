import React from "react";
import thankyou from "../../../images/icon-thank-you.svg"


export default function Page5(props) {
    return (
        <div className=" page5">
            <img src={thankyou} />
            <h2>Thank you</h2>
            <p>Thanks for confirming your subscription! we hope you have
                fun using our platform. if you ever need support. Please feel
                free to email us at support@loremgaming.com.</p>
        </div>
    );
}