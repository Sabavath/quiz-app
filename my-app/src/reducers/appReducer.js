import initialState from './initialState';
import * as actionTypes from '../constants/actionTypes';

export function appReducer(state = initialState.appState, action) {
  switch (action.type) {
    case actionTypes.SET_APP_STATE: {
      const score = action.payload.answersScore.reduce((a, b) => a+b, 0);
      return {
        ...state,
        score
      };
    }
    default: {
      return state;
    }
  }
}