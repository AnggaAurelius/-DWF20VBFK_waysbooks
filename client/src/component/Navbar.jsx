import React, { useContext, useState } from "react";
import "./dropStyles.css";
import "../ok.css";
import book from "../pages/LandingPage/waysBooks.png";
import profile from "./Profile.png";
import ic_profile from "./ic_profile.png";
import add from "./addBook.png";
import logOut from "./logoutRed.png";
import cart from "./cart.png";
import list from "./list.png";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { AppContext } from "./context/Global";

const Navbar = () => {
  const [state, dispatch] = useContext(AppContext);
  const [isActive, setIsActive] = useState(false);
  const setOverlay = () => setIsActive(false);
  const onClick = () => setIsActive(!isActive);
  const handleLogOut = () => {
    dispatch({
      type: "LOGOUT",
    });
  };
  const role = state.user.role;
  return (
    <div className="nv">
      <Link to="/beranda" as={Link}>
        <img className=" logoBook" src={book} alt="" />
      </Link>
      <div className="container">
        <div className="menu-container">
          <Link to="/cart" as={Link}>
            <img
              className={role === "ADMIN" ? "hide" : "cart"}
              src={cart}
              alt=""
            />
          </Link>
          <button onClick={onClick} className="menu-trigger">
            <img className="mt-5 right" src={profile} alt="" />
          </button>
          <nav className={`menu ${isActive ? "active" : ""}`}>
            <ul>
              <li className={role === "ADMIN" ? "hide" : ""}>
                <Link to="/profile" as={Link} className="bold">
                  <img className="mr-3" src={ic_profile} alt="" width="35px" />
                  Profile
                </Link>
              </li>
              <li className={role === "USER" ? "hide" : ""}>
                <Link to="/add" as={Link} className="bold">
                  <img className="mr-3" src={add} alt="" width="35px" />
                  Add Book
                </Link>
              </li>
              <li className={role === "USER" ? "hide" : ""}>
                <Link to="/list" as={Link} className="bold">
                  <img className="mr-3" src={list} alt="" width="35px" />
                  Transaction
                </Link>
              </li>
              <li>
                <Link to="/" as={Link} onClick={handleLogOut} className="bold">
                  <img className="mr-3" src={logOut} alt="" width="35px" />
                  Log Out
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        className={`Overlay2 ${isActive ? "Show" : ""}`}
        onClick={() => setOverlay()}
      />
    </div>
  );
};

export default Navbar;
