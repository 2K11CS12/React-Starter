import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { Auth } from '../services';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    let loginPath = '/login';
    if (rest.path) {
        loginPath += `?return=${rest.path.substring(1)}`;
    }
    return (
        <Route {...rest} render={(props) => (
            Auth.isAuthenticated() ?
            <Component {...props} /> :
            <Redirect to={loginPath} />
        )} />
    )
}

export default ProtectedRoute