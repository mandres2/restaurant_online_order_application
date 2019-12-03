// React
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Utils
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { setCurrentUser, logoutUser } from "./actions/authActions-Business";

// Components
import Register_Business from "./components/auth/Register-Business";
import Register_Customer from "./components/auth/Register-Customer";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Layout_Business from "./components/dashboard/Layout-Business";
import Layout_Customer from "./components/dashboard/Layout-Customer";
import NotFound from "./components/404/404";

// Style
import "./App.scss";

// Check for token to keep user logged in
if (localStorage.jwtTokenTeams) {
  // Set auth token header auth
  const token = JSON.parse(localStorage.jwtTokenTeams);
  setAuthToken(token);

  // Decode token and get user info and exp
  const decoded = jwt_decode(token);

  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/register-business" component={Register_Business} />
              <Route exact path="/register-customer" component={Register_Customer} />
              <PrivateRoute exact path="/dashboard-business" component={Layout_Business} />
              <PrivateRoute exact path="/dashboard-customer" component={Layout_Customer} />
              <Route
                component={localStorage.jwtTokenTeams ? Layout_Business : NotFound}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;