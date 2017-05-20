/**
 * Created by sunxiaodong on 2017/5/20.
 */

import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {StyleSheet, View, TextInput, Button, Text} from 'react-native';
import {dp} from '../../../utils/DimensionUtil';
import * as loginActions from './actions';

/**
 * 登录界面
 */
class LoginScreen extends Component {

    static navigationOptions = {
        title: '登录',
    };

    constructor(props) {
        super(props);
    }

    /**
     * 当 Clock 第一次渲染到 DOM 时，回调
     */
    componentDidMount() {

    }

    /**
     * 当 Clock 从 DOM 移除的时, 回调
     */
    componentWillUnmount() {

    }

    render() {
        const {navigation, actions} = this.props;
        return (
            <View style={styles.bg}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={actions.verify}
                />
                <Text style={styles.welcome}>
                    {this.props.verify}
                </Text>
                {/*<TextInput*/}
                {/*style={{height: 40, borderColor: 'gray', borderWidth: 1}}*/}
                {/*onChangeText={onPasswordChangeText}*/}
                {/*value={this.state.text}*/}
                {/*/>*/}
                <Button
                    onPress={() => navigation.dispatch({type: 'Login'})}
                    title="登录"
                />
            </View>
        );
    }
}

LoginScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#F6F8FA'
    },
    textInput: {
        height: dp(110),
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

/**
 * 建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系
 * @param state
 * @param ownProps 容器组件的props对象
 */
const mapStateToProps = (state, ownProps) => {
    return {
        verify: state.login.verify
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen);