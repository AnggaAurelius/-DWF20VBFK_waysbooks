import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Register = () => {
  const [signUpModal, setSignUpModal] = useState(false);
  const setOverlay = () => setSignUpModal(false);
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
        <Form>
          <Form.Group controlId="formBasicEmail" className=" form">
            <Form.Control
              className="p-3 form"
              type="email"
              placeholder="Email"
              name="email2"
              //   value={email2}
              //   onChange={(e) => handleChangeRegister(e)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="form">
            <Form.Control
              className="form"
              type="password"
              placeholder="Password"
              name="password2"
              //   value={password2}
              //   onChange={(e) => handleChangeRegister(e)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formFullName" className=" form">
            <Form.Control
              className="form"
              type="text"
              placeholder="Full Name"
              name="fullname"
              //   value={fullname}
              //   onChange={(e) => handleChangeRegister(e)}
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
