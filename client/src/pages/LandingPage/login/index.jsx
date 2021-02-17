import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../../../component/context/modal";
import { AppContext } from "../../../component/context/Global";
import { Form } from "react-bootstrap";
import { API, setAuthToken } from "../../../config/axios";

const Login = () => {
  const history = useHistory();
  const [state, dispatch] = useContext(AppContext);
  const [state2, dispatch2] = useContext(Context);
  const setModal = state2.modalSignIn;

  const switching = () => {
    if (!setModal) {
      dispatch2({
        type: "SIGN_IN",
      });
    } else {
      dispatch2({
        type: "SIGN_UP",
      });
    }
  };

  // Login
  //
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginFormData;

  const handleLogin = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const body = JSON.stringify({
        email,
        password,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const user = await API.post("/login", body, config);
      const result = user.data.data.user;

      if (result.role === "ADMIN") {
        dispatch({
          type: "LOGIN_SUKSES",
          payload: result,
        });
        history.push("/dashboard");
      } else {
        dispatch({
          type: "LOGIN_SUKSES",
          payload: result,
        });
        history.push("/beranda");
      }
      setAuthToken(result.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <button className="tombol sign signIn" onClick={() => switching()}>
        Sign In
      </button>
      <div className={` pl-5 pr-5 p-4 Modal ${setModal ? "Show" : ""}`}>
        <h3 className="bold">Sign In</h3>
        <br />
        <Form onSubmit={(e) => onSubmit(e)}>
          <Form.Group controlId="formBasicEmail" className="form">
            <Form.Control
              className="form"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => handleLogin(e)}
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
              onChange={(e) => handleLogin(e)}
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
              <a className="text-dark" href="/#" onClick={() => switching()}>
                <strong> Klik Here</strong>
              </a>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default Login;
