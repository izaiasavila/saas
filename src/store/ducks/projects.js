import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getProjectsRequest: null,
  getProjectsSuccess: ['data'],
});

export const ProjectsTypes = Types;
export default Creators;

/* Inicial State */

const INITIAL_STATE = Immutable({
  data: [],
});

/* Reducers */

export const success = (state, { data }) => {
  return state.merge({ data });
};

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_PROJECTS_SUCCESS]: success,
});
