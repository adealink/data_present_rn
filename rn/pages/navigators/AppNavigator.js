/**
 * Created by sunxiaodong on 2017/5/20.
 */

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {addNavigationHelpers, StackNavigator} from 'react-navigation';
import LoginScreen from '../login/components/LoginScreen';
import MainScreen from '../main/components/MainScreen';

export const AppNavigator = StackNavigator({
    Login: {screen: LoginScreen},
    Main: {screen: MainScreen}
});

const AppWithNavigationState = ({dispatch, nav}) => (
    <AppNavigator navigation={addNavigationHelpers({dispatch, state: nav})}/>
);

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);