import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { Auth } from "../services";

const Routes = () => {
  let signOutHandle = currentHistory => {
    Auth.signOut(currentHistory);
  };
  return (
    <Switch>
      <div className="App">
        <Route exact path="/" component={() => <Redirect to="/login" />} />
      </div>
    </Switch>
  );
};

export default withRouter(Routes);
