/**
 * Created by sunxiaodong on 2017/5/20.
 */
import * as actionTypes from './actionTypes';

export default function main(state = { output: '' }, action) {
  switch (action.type) {
    case actionTypes.CHANGE:
      return {
        ...state,
        output: action.text,
      };
    default:
      return state;
  }
}
