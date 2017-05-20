/**
 * Created by sunxiaodong on 2017/5/20.
 */
import * as actionTypes from './actionTypes';

export default function login(state = {verify: ''}, action) {
    switch (action.type) {
        case actionTypes.VERIFY:
            return {
                ...state,
                verify: action.text
            };
        default:
            return state
    }
}