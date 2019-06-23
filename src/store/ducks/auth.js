import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token'],
});

export const AuthTypes = Types;
export default Creators;

/* Inicial State */

const INITIAL_STATE = Immutable({
  signedIn: false,
  token: null,
});

/* Reducers */

export const success = (state, { token }) => {
  console.log('ducks-auth: ' + token);
  return state.merge({ signedIn: true, token });
};

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,
});
