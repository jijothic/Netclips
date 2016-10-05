import {
  CLEAR_ERRORS,
  RECEIVE_ERRORS } from '../actions/session_actions';

import merge from 'lodash/merge';

const ErrorReducer = (state = [], action) => {
  switch(action.type) {
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_ERRORS:
      return [action.errors, ...state];
    default:
      return state;
  }
};

export default ErrorReducer;
