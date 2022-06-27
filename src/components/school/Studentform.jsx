import React from "react";
import "./Studentform.css";
const Studentform = () => {
  return (
    <div className="container">
      <div className="form">
        <div className="btn">
          <button className="signUpBtn">Student Form</button>
        </div>
        <form className="signUp" action="" method="get">
          <div className="formGroup">
            <input
              type="text"
              id="userName"
              placeholder="First Name"
              autocomplete="off"
            />
          </div>
          <div className="formGroup">
            <input
              type="text"
              id="userName"
              placeholder="Last Name"
              autocomplete="off"
            />
          </div>
          <div className="formGroup">
            <input
              type="date"
              placeholder="Date of Birth"
              name="DOB"
              required
              autocomplete="off"
            />
          </div>

          <div className="formGroup">
            <select name="standard" id="standard">
              <option value="0">Standard</option>
              <option value="1">I Std</option>
              <option value="2">II Std</option>
              <option value="3">III Std</option>
              <option value="4">IV Std</option>
              <option value="5">V Std</option>
              <option value="6">VI Std</option>
              <option value="7">VII Std</option>
              <option value="8">VIII Std</option>
              <option value="9">IX Std</option>
              <option value="10">X Std</option>
              <option value="11">XI Std</option>
              <option value="12">XII Std</option>
            </select>

            <select name="section" id="section">
              <option value="">Section</option>
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
              <option value="d">D</option>
              <option value="e">E</option>
            </select>
          </div>
          <div className="formGroup">
            <input
              type="text"
              id="parentName"
              placeholder="Parent Name"
              required
              autocomplete="off"
            />
          </div>
          <div className="formGroup">
            <input
              type="digit"
              id="phone number"
              placeholder="Phone Number"
              required
              autocomplete="off"
            />
          </div>
          <div className="formGroup">
            <input
              type="digit"
              id="alternate number"
              placeholder="Alternate Number"
              required
              autocomplete="off"
            />
          </div>
          <div className="formGroup">
            <input
              type="text"
              id="password"
              placeholder="Address"
              required
              autocomplete="off"
            />
          </div>
          <div className="formGroup">
            <input
              type="text"
              id="city"
              placeholder="City"
              required
              autocomplete="off"
            />
          </div>
          <div className="formGroup">
            <input
              type="text"
              id="confirmPassword"
              placeholder="Pincode"
              required
              autocomplete="off"
            />
          </div>
          <div className="checkBox">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <span className="text">I agree with term & conditions</span>
          </div>
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

export default Studentform;
