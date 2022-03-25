import React from "react";
import { Redirect } from "react-router-dom";

export const AuthorizationChecker = (WrappedComponent) => class extends React.Component {
  render() {
    const tkn = localStorage.getItem('token');
    const rest = this.props;
    return tkn ? <WrappedComponent {...rest} /> : <Redirect to="/login" />;
  }
};