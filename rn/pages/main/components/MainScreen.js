/**
 * Created by sunxiaodong on 2017/5/20.
 */
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';
import { dp } from '../../../utils/DimensionUtil';
import * as mainActions from './actions';

/**
 * 主界面
 */
class MainScreen extends Component {
  static navigationOptions = {
    title: '首页',
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { navigation, actions } = this.props;
    return (
      <View style={styles.bg}>
        <TextInput style={styles.textInput} onChangeText={actions.change} />
        <Text style={styles.welcome}>{this.props.output}</Text>
        <Button
          title="退出登录"
          onPress={() => navigation.dispatch({ type: 'Logout' })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#F6F8FA',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textInput: {
    height: dp(110),
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    output: state.main.output,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(mainActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
