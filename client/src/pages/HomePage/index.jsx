import React from "react";
import Navbar from "../../component/Navbar";
import { ShowBooks } from "../LandingPage/ShowBooks";
import bgw from "../LandingPage/bgw.jpg";

const HomePage = () => {
  return (
    <div className=" bgImage " style={{ backgroundImage: `url( ${bgw})` }}>
      <Navbar />
      <ShowBooks />
    </div>
  );
};

export default HomePage;
