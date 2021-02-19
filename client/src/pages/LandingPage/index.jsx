import React, { useContext, useEffect } from "react";
import "./style.css";
import { Context } from "../../component/context/modal";
import book from "./waysBooks.png";
import Login from "./login";
import Register from "./register";
import { AppContext } from "../../component/context/Global";
import { useHistory } from "react-router-dom";
import { ShowBooks } from "./ShowBooks";

const LandingPage = () => {
  const history = useHistory();
  const [state] = useContext(AppContext);
  const [state2, dispatch2] = useContext(Context);
  const setSignup = state2.modalSignUp;
  const setSignin = state2.modalSignIn;
  const setOverlay = () => {
    dispatch2({
      type: "CLOSE",
    });
  };
  const switching = () => {
    dispatch2({
      type: "SIGN_IN",
    });
  };
  useEffect(() => {
    if (!state.loading && state.isLogin) {
      history.push("/beranda");
    }
  }, [state]);
  return (
    <div className="pt-2 bgWhite">
      {/* <div className="bgland" /> */}
      <img src={book} alt="" className="logoBook" />
      <Login />
      <br />
      <Register />
      <div onClick={() => switching()}>
        <ShowBooks />
      </div>
      <div
        className={`Overlay ${setSignup || setSignin ? "Show" : ""}`}
        onClick={() => setOverlay()}
      />
      <div className="botland" />
    </div>
  );
};

export default LandingPage;
