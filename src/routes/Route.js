import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { store } from "../store";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  coreTeam,
  ...rest
}) {
  const { uuid, isCoreTeam } = store.getState().auth;

  if (!uuid && isPrivate) {
    return <Redirect to="/" />;
  }
  if (uuid && coreTeam && !isCoreTeam) {
    return <Redirect to="/" />;
  }
  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  coreTeam: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  coreTeam: false
};
