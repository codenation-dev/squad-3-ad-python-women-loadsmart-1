import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';



const ProtectRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    rest.isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login/',
        state: { from: props.location }
      }} />
    )
  )} />
)

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.errors
})

export default connect(
  mapStateToProps
)(ProtectRoute);