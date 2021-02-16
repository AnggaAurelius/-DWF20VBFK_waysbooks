import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./component/route/PrivateRoute";
import { AdminRoute } from "./component/route/AdminRoute";
import { ContextProvider } from "./component/context/modal";
import { AppContextProvider } from "./component/context/Global";
import { setAuthToken } from "./config/axios";

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Admin from "./pages/Admin";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <ContextProvider>
      <AppContextProvider>
        <div className="App ">
          <Router>
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <PrivateRoute exact path="/beranda" component={HomePage} />
              <AdminRoute exact path="/dashboard" component={Admin} />
            </Switch>
          </Router>
        </div>
      </AppContextProvider>
    </ContextProvider>
  );
}

export default App;
