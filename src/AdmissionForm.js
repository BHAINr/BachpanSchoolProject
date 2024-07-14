import './AdmissionForm.css';
//import logo from'./images/bachpanlogo.png'; 
import React, { useState } from "react";
//import { Button } from "@mui/material";
function AdmissionForm() {
  // Step 2: Create state variables for input fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [admissionClass, setAdmissionClass] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Step 4: Handle input changes
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleAdmissionClassChange = (e) => {
    setAdmissionClass(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  // Step 5: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Admission for Class:", admissionClass);
    console.log("Phone Number:", phoneNumber);
    // Clear form after submission
    setFirstName("");
    setLastName("");
    setAdmissionClass("");
    setPhoneNumber("");
  };

  return (
    <div className="form">

<img  href="/"  className="App-logo" alt="logo"/>

      <form onSubmit={handleSubmit}>
            <h1 className="heading">Enroll Today for a Brighter Tomorrow <br/> - Admission Form.</h1>

          <div className="selectClass">
          <label htmlFor="admissionClass">Admission for Class:</label>
          <select
            id="admissionClass"
            value={admissionClass}
            onChange={handleAdmissionClassChange}
          >
            <option value="">Select Class</option>
            <option value="Playgroup">Playgroup</option>
            <option value="Nursery">Nursery</option>
            <option value="lkg">LKG</option>
            <option value="ukg">UKG</option>
            <option value="1st Grade">1st Grade</option>
            <option value="2nd Grade">2nd Grade</option>
            <option value="3rd Grade">3rd Grade</option>
            <option value="4th Grade">4th Grade</option>
            <option value="5th Grade">5th Grade</option>
            <option value="6th Grade">6th Grade</option>
            <option value="7th Grade">7th Grade</option>
          </select>
          </div>
        

            <div className="input">

              <div className='names'>

            <p className="name">First Name* <br/>

            <input type="text"
            className='inputname'
            htmlFor="firstName" 
            value={firstName}
            onChange={handleFirstNameChange} 
            pattern="[A-Za-z]{1-10}"
            id="firstName"
            placeholder="Enter Your First Name"/></p>


            <p className="name">Last Name* <br/>
            <input type="text" 
            className='inputname'
            htmlFor="lasttName"  
            value={lastName} 
            onChange={handleLastNameChange} 
            pattern="[A-Za-z]{1-10}" 
            id="lastName" 
            placeholder="Enter Your Last Name"/></p>
            <div/>

            </div>

            <div className='emnum'>
            <p className="name2">
            Email ID* <br/>
            <input type="email"
            className='inputname2'
            name="" id="email" 
            placeholder="Enter Your Email ID"/>
            </p>

            <p className="name2">
            Mobile Number* <br/>
            <input type="tel"
            className='inputname2'
            htmlFor="phoneNumber"
            pattern="[0-9]{0-10}"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Enter Your Mobile No."/>
            </p>
            </div>


            <div className='msg'>
            <p>Message <br/> 
            <textarea name="" id="msg" 
            cols="50" 
            rows="10" 
            placeholder="Enter Your Message">
            </textarea>
            </p>
            </div>



          <button variant="contained" type="submit">Submit</button>
          </div>
        </form>
        </div>
  );
}

export default AdmissionForm;
