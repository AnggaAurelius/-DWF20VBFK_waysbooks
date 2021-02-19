import React, { useState, useContext } from "react";
import { AppContext } from "../../component/context/Global";
import email from "./image/email.png";
import gender from "./image/gender.png";
import call from "./image/call.png";
import map from "./image/map.png";
import profil from "./image/profil.png";
import cover from "./image/detailbook.png";
import { useHistory } from "react-router-dom";
import Navbar from "../../component/Navbar";

const Profile = () => {
  const history = useHistory();
  const [state] = useContext(AppContext);
  const [modal, setModal] = useState(false);

  const user = state.user;

  return (
    <div className=" bg  bgland">
      <div className="">
        <Navbar />
      </div>
      <div
        className={`p-4 text-center red fs-18 Modalsub ${modal ? "Show" : ""}`}
      >
        <p>please make a payment to read the book</p>
      </div>
      <div className="profileBody text-left mt-5">
        <div className="col">
          <h1 className="mt-5 mb-5 timesNew">Profile</h1>
          <div className="pp">
            <div className="mt-5 ml-5">
              <br />
              <br />
              <div className=" float-right pr-5">
                <img src={profil} alt="" /> <br />
                <br />
                <button className="w00 btn-red " type="">
                  Edit profil
                </button>
              </div>
              <div>
                <img className=" float-left pt-3" src={email} alt="" />
                <div className="ml-5 ">
                  <h5 className="font-weight-bold">{user.email}</h5>
                  <p>email</p>
                </div>
              </div>
              <div className="pt-3">
                <img className=" float-left pt-3" src={gender} alt="" />
                <div className="ml-5">
                  <h5 className="font-weight-bold">Male</h5>
                  <p>Gender</p>
                </div>
              </div>
              <div className="pt-3">
                <img className=" float-left pt-3" src={call} alt="" />
                <div className="ml-5">
                  <h5 className="font-weight-bold">0838-8743-9399</h5>
                  <p>Mobile Phone</p>
                </div>
              </div>
              <div className="pt-3 pb-5">
                <img className=" float-left pt-3" src={map} alt="" />
                <div className="ml-5">
                  <h5 className="font-weight-bold">Indonesia</h5>
                  <p>Address</p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="timesNew myBooks">My Books</h2>

          <div className=" mr-3 mb-5">
            <img className="lbook flink" src={cover} alt="" />
            <h3 className="mt-3 timesNew">Tess on the Rosad</h3>
            <p className="gray authorPr">Rachel Hartman</p>
            <button className="tombol blackBtn btnDwld bold fs-18 mt-4">
              Download
            </button>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};

export default Profile;
