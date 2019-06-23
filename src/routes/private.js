import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import store from '~/store';

const PrivateRouter = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (store.getState().auth.signedIn ? (
      <Component {...props} />
    ) : (<Redirect to={{ pathname: '/signin', state: { from: props.location } }} />))
    }
  />
);

PrivateRouter.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRouter;
