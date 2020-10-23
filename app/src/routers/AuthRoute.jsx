import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function AuthRoute({ auth: isAuthenticated, component: Component, ...rest }) {
  return <Route {...rest} render={props => (!isAuthenticated ? <Component {...props} /> : <Redirect to='/' />)} />;
}
