import * as actionTypes from '../constants/actionTypes';

export function setAppState(payload) {
  return {
    type: actionTypes.SET_APP_STATE,
    payload
  };
}