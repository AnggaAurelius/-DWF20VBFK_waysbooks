import React, { useContext } from "react";
import { AppContext } from "../../component/context/Global";
import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import { ShowBooks } from "../LandingPage/ShowBooks";

const HomePage = () => {
  const [state, dispatch] = useContext(AppContext);
  const role = state.user.role;

  const handleLogOut = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <div>
      <Navbar />
      <ShowBooks />
    </div>
  );
};

export default HomePage;
