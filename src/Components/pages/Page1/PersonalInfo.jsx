import React, { useEffect, useState } from 'react';
import PageHeading from "../../PageHeading";


export default function PersonalInfo({ test1 }) {

    const [formData, SetFormData] = useState(
        {
            username: "",
            email: "",
            phone: ""
        }
    )

    function buttonClicked(event) {
    const formvalues = event.target;
    const name = formvalues.name;
    const value = formvalues.value;

    SetFormData(prevVals => {
      return {
        ...prevVals,
        [name]: value
      };
    });
    event.preventDefault();
  }

  useEffect(() => {
    test1(formData);
  }, [formData]);


    return (
        <form id="my-form" className="personelInfoForm" onChange={buttonClicked}>
            <PageHeading heading="Personal Info" para="Please provide you name, email address and Phone number." />
            <label htmlFor="username">Name</label>
            <input id="username" type="text" name="username" value={formData.username}/>
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" value={formData.email}/>
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="number" name="phone" required value={formData.phone}/>
        </form>

    );
}