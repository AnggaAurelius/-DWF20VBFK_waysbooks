import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./component/route/PrivateRoute"
import { AppContextProvider} from "./component/context/Global";

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <AppContextProvider>
    <div className="App ">
      <Router>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <PrivateRoute exact path="/beranda" component={HomePage} />
          </Switch>
        </Router>
    </div>
    </AppContextProvider>
  );
}

export default App;
