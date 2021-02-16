import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Login = () => {
  const [signInModal, setSignInModal] = useState(false);
  const setOverlay = () => {
    setSignInModal(false);
  };

  return (
    <div className="container">
      <button
        className="tombol sign signIn"
        onClick={() => setSignInModal(!signInModal)}
      >
        Sign In
      </button>
      <div className={` pl-5 pr-5 p-4 Modal ${signInModal ? "Show" : ""}`}>
        <h3 className="bold">Sign In</h3>
        <br />
        <Form className="gray">
          <Form.Group controlId="formBasicEmail" className="form">
            <Form.Control
              className="form"
              type="email"
              placeholder="Email"
              name="email"
              // value={email}
              // onChange={(e) => handleLogin(e)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="form">
            <Form.Control
              className="form"
              type="password"
              placeholder="Password"
              name="password"
              // value={password}
              // onChange={(e) => handleLogin(e)}
              required
            />
          </Form.Group>
          <br />
          <button className="tombol" type="submit">
            Sign in
          </button>
          <div>
            <br />
            <p className="text-center">
              Don't have an account ?{" "}
              <a
                className="text-dark"
                href="#"
                // onClick={() => switching(false)}
              >
                <strong> Klik Here</strong>
              </a>
            </p>
          </div>
        </Form>
      </div>
      <div
        className={`Overlay ${signInModal ? "Show" : ""}`}
        onClick={() => setOverlay()}
      />
      <div className="bgland" />
    </div>
  );
};
export default Login;
