import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { Context } from "../../component/context/modal";
import book from "./waysBooks.png";
import Login from "./login";
import Register from "./register";
import { AppContext } from "../../component/context/Global";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  const history = useHistory();
  const [state, dispatch] = useContext(AppContext);
  const [state2, dispatch2] = useContext(Context);
  const setSignup = state2.modalSignUp;
  const setSignin = state2.modalSignIn;
  const setOverlay = () => {
    dispatch2({
      type: "CLOSE",
    });
  };
  useEffect(() => {
    if (!state.loading && state.isLogin) {
      history.push("/beranda");
    }
  }, [state]);
  return (
    <div className="pt-2">
      <div className="bgland" />
      <img src={book} alt="" className="logoBook" />
      <Login />
      <br />
      <Register />{" "}
      <div
        className={`Overlay ${setSignup || setSignin ? "Show" : ""}`}
        onClick={() => setOverlay()}
      />
    </div>
  );
};

export default LandingPage;
