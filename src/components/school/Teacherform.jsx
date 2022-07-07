import React from "react";
import "./Teacherform.css";

const Teacherform = () => {
  return (
    <div className="container">
      <div className="forms">
        <div className="btn">
          <button className="signUpBtn">TEACHER FORM</button>
        </div>
        <form className="detailForm">
          <p>First Name</p>
          <input type="text" name="" placeholder=" Enter First Name" />
          <p>Last Name</p>
          <input type="text" name="" placeholder=" Enter Last Name" />
          <p>Phone Number</p>
          <input type="digit" name="" placeholder="Enter Phone Number" />
          <p>Email</p>
          <input type="text" name="" placeholder=" Enter Email" />
          <p>Qualification</p>
          <input type="text" name="" placeholder=" Enter Qualification" />
          <p>Experience</p>
          <input type="text" name="" placeholder=" Enter Experience" />
          <p>Date of Birth</p>
          <input type="date" name="DOB" placeholder=" Enter DOB" />
          <p>Date of Joining</p>
          <input type="date" name="DOJ" placeholder=" Enter DOJ" />
          <p>Address</p>
          <input type="text" name="" placeholder=" Enter Address" />
          <p>Father/Spouse Name</p>
          <input type="text" name="" placeholder=" Enter Father/Spouse Name" />
          <p>City</p>
          <input type="text" name="" placeholder=" Enter City" />
          <p>Pincode</p>
          <input type="text" name="" placeholder=" Enter Pincode" />

          <div className="formGroup">
            <button type="button" className="btn2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Teacherform;
