import React from "react";
import Login from "./login";
import Register from "./register";
import "./style.css";

const LandingPage = () => {
  return (
    <div className="pt-2 bg-gray full">
      <h2>Ways Book</h2>
      <Login />
      <br />
      <Register />
    </div>
  );
};

export default LandingPage;
