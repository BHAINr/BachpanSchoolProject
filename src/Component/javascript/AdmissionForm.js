import './AdmissionForm.css';
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { adfFome } from '../../reducer/fomeReducer';
//import { Button } from "@mui/material";
function AdmissionForm() {
  // Step 2: Create state variables for input fields
  const dispatch = useDispatch();

  const [admissionClass, setAdmissionClass] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //const [email, setEmail]= useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  //const [description, setDescription] = useState("");

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
    console.log("ADmission Fome submit");
    dispatch(adfFome(firstName, lastName, admissionClass,phoneNumber));
    // Clear form after submission
    setFirstName("");
    setLastName("");
    setAdmissionClass("");
    setPhoneNumber("");
  };

  return (

    <div className='paragraph'>
      <p className='para2'>We are thrilled to welcome new families to our school community to experience the difference that a <b>BACHPAN</b> <br/>education can make <br/>and look forward to partnering with you in your child's educational journey.</p>
    <div className="form">

      <form onSubmit={handleSubmit}>
            <h1 className="heading">Shape Your Future with Us:  <br/> - Admission Form.</h1>

          <div className="selectClass">
          
          <select
            id="admissionClass"
            value={admissionClass}
            onChange={handleAdmissionClassChange}
          >
            <option className='grades' value="">Admission for</option>
            <option className='grades' value="Playgroup">Playgroup</option>
            <option className='grades' value="Nursery">Nursery</option>
            <option className='grades' value="lkg">LKG</option>
            <option className='grades' value="ukg">UKG</option>
            <option className='grades' value="1st Grade">1st Grade</option>
            <option className='grades' value="2nd Grade">2nd Grade</option>
            <option className='grades' value="3rd Grade">3rd Grade</option>
            <option className='grades' value="4th Grade">4th Grade</option>
            <option className='grades' value="5th Grade">5th Grade</option>
            <option className='grades' value="6th Grade">6th Grade</option>
            <option className='grades' value="7th Grade">7th Grade</option>
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
            rows="5" 
            placeholder="Enter Your Message">
            </textarea>
            </p>
            </div>



          <button className="animated-button" variant="contained" type="submit">Submit</button>
          </div>
        </form>
        </div>
        </div>
  );
}

export default AdmissionForm;
