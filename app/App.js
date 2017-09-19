import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import AppWithNavigationState from './pages/navigators/AppNavigator';
import * as Reducers from './pages/Reducers';

const reducer = combineReducers(Reducers);
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
