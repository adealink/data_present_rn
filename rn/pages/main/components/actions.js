/**
 * Created by sunxiaodong on 2017/5/20.
 */
import * as actionTypes from './actionTypes';

export const change = (text) => {
    return {type: actionTypes.CHANGE, text: text}
};