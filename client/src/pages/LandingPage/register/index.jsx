import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../../component/context/Global";
import { Form } from "react-bootstrap";
import { API, setAuthToken } from "../../../config/axios";

const Register = () => {
  const history = useHistory();
  const [state, dispatch] = useContext(AppContext);

  const [signUpModal, setSignUpModal] = useState(false);
  const setOverlay = () => setSignUpModal(false);

  const [formDataRegister, setFormDataRegister] = useState({
    email: "",
    password: "",
    fullname: "",
  });
  const { email, password, fullname } = formDataRegister;
  const handleChangeRegister = (e) => {
    setFormDataRegister({
      ...formDataRegister,
      [e.target.name]: e.target.value,
    });
  };
  const registerSubmit = async (e) => {
    e.preventDefault();

    try {
      const body = JSON.stringify({
        email: email,
        password: password,
        fullName: fullname,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const user = await API.post("/register", body, config);

      dispatch({
        type: "LOGIN_SUKSES",
        payload: user.data.data.user,
      });

      setAuthToken(user.data.data.user.token);

      history.push("/beranda");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <button
        className="tombol sign signUp"
        onClick={() => setSignUpModal(!signUpModal)}
      >
        Sign Up
      </button>
      <div className={`pl-5 pr-5 Modal ${signUpModal ? "Show" : ""}`}>
        <h3 className="mgtop pt-4 bold">Sign Up</h3>
        <br />
        <Form onSubmit={(e) => registerSubmit(e)}>
          <Form.Group controlId="formBasicEmail" className=" form">
            <Form.Control
              className="p-3 form"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => handleChangeRegister(e)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="form">
            <Form.Control
              className="form"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => handleChangeRegister(e)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formFullName" className=" form">
            <Form.Control
              className="form"
              type="text"
              placeholder="Full Name"
              name="fullname"
              value={fullname}
              onChange={(e) => handleChangeRegister(e)}
              required
            />
          </Form.Group>
          <br />
          <div className="">
            <button className="w00 btn-red" type="submit">
              Sign Up
            </button>
            <p className="mt-4 text-center">
              Already have an account ?{" "}
              <a
                className="text-dark"
                href="/#"
                // onClick={() => switching(true)}
              >
                <strong> Klik Here</strong>
              </a>
            </p>
          </div>
        </Form>
      </div>
      <div
        className={`Overlay ${signUpModal ? "Show" : ""}`}
        onClick={() => setOverlay()}
      />
    </div>
  );
};
export default Register;
