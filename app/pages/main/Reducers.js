import * as ActionTypes from './ActionTypes';

const main = (state = { output: '' }, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE:
      return {
        ...state,
        output: action.text,
      };
    default:
      return state;
  }
};

export { main };
