import React, { useContext } from "react";
import "./style.css";
import { Context } from "../../component/context/modal";

import Login from "./login";
import Register from "./register";
const LandingPage = () => {
  const [state2, dispatch2] = useContext(Context);
  const setSignup = state2.modalSignUp;
  const setSignin = state2.modalSignIn;
  const setOverlay = () => {
    dispatch2({
      type: "CLOSE",
    });
  };
  return (
    <div className="pt-2">
      <h2>Ways Book</h2>
      <Login />
      <br />
      <Register />
      <div className="bgland" />
      <div
        className={`Overlay ${setSignup || setSignin ? "Show" : ""}`}
        onClick={() => setOverlay()}
      />
    </div>
  );
};

export default LandingPage;
