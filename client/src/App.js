import React, { useEffect, useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./component/route/PrivateRoute";
import { AdminRoute } from "./component/route/AdminRoute";
import { ContextProvider } from "./component/context/modal";
import { AppContext } from "./component/context/Global";
import { API, setAuthToken } from "./config/axios";
import { useHistory } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Admin from "./pages/Admin";
import Add from "./pages/Admin/AddBook";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const history = useHistory();
  const [state, dispatch] = useContext(AppContext);
  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      if (response.status === 401) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      dispatch({
        type: "USER_LOADED",
        payload: response.data.data.user,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: "AUTH_ERROR",
      });
    }
  };
  console.log(state);
  useEffect(() => {
    checkUser();
  }, []);

  return (
    <ContextProvider>
      <Router>
        <div className="App ">
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <PrivateRoute exact path="/beranda" component={HomePage} />
            <PrivateRoute exact path="/dashboard" component={Admin} />
            <PrivateRoute path="/add" exact component={Add} />
          </Switch>
        </div>
      </Router>
    </ContextProvider>
  );
};

export default App;
