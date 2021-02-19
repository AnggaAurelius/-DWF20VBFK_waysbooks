import React, { useContext } from "react";
import { AppContext } from "../../component/context/Global";
import { Link } from "react-router-dom";

const Admin = () => {
  const [state, dispatch] = useContext(AppContext);

  const handleLogOut = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <div>
      <h2>Dashboard admin</h2>
      <Link to="/add" className="">
        {" "}
        add book
      </Link>
      <Link to="/" className="linkSide" onClick={handleLogOut}>
        <p className="">Logout</p>
      </Link>
    </div>
  );
};

export default Admin;
