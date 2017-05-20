/**
 * Created by sunxiaodong on 2017/5/19.
 */

import React, {Component} from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import AppWithNavigationState from './navigators/AppNavigator';
import * as reducers from './reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class Container extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}