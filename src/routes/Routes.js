import React from "react";
import { Router, Switch, Route, Redirect, withRouter } from "react-router-dom";
import ProtectedRoute from ".";
import { Auth } from "../core/services";
import { Login } from "../containers/auth"
import { helpers } from '../core/utils';

const Routes = () => {
  let signOutHandle = currentHistory => {
    Auth.signOut(currentHistory);
  };
  return (
      <div className="App">
      <Router history={helpers.history}>
          <Switch>
            <Route exact path="/" component={() => <Redirect to="/login" />}/>
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
  );
};

export default withRouter(Routes);
