import React from "react";
import Login from "./login";
import Register from "./register";
import "./style.css";

const LandingPage = () => {
  return (
    <div className="pt-2">
      <h2>Ways Book</h2>
      <Login />
      <br />
      <Register />
      <div className="bgland" />
    </div>
  );
};

export default LandingPage;
