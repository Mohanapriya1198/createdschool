import React from "react";
import "./Classform.css";

const Classform = () => {
  return (
    <div class="selectionbox">
      <h2>Class Form</h2>
      <form>
        <label for="standard">Select a Standard</label>

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

        <label for="std">Select a Section</label>

        <select name="section" id="section">
          <option value="">Section</option>
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
          <option value="d">D</option>
          <option value="e">E</option>
        </select>

        <input type="submit" name="sign-in" value="Sign In" />
      </form>
    </div>
  );
};

export default Classform;
