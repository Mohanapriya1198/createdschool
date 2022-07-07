import React from "react";
import "./School.css";

const School = () => {
  return (
    <div className="loginbox">
      <h1>Login Here</h1>
      <form>
        <p>Schoolname</p>
        <input type="text" name="" placeholder=" Enter Schoolname" />
        <p>Id</p>
        <input type="password" name="" placeholder=" Enter Id" />
        <input type="submit" name="" value="Login" />
        <a href="#">Don't have an account. Register Here</a>
      </form>
    </div>
  );
};

export default School;
