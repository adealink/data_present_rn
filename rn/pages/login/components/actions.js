/**
 * Created by sunxiaodong on 2017/5/20.
 */
import * as actionTypes from './actionTypes';

export const verify = (text) => {
    return {type: actionTypes.VERIFY, text: text}
};