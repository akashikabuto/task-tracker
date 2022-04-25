import { Component } from "react";
import { Redirect } from "react-router-dom";

export const AuthorizationChecker = (WrappedComponent) => class extends Component {
  render() {
    const tkn = localStorage.getItem('token');
    const locale = localStorage.getItem('lang') || "eng";
    const rest = this.props;
    return tkn ? <WrappedComponent {...rest} token={tkn} locale={locale} /> : <Redirect to="/login" />;
  }
};