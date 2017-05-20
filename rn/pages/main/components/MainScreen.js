/**
 * Created by sunxiaodong on 2017/5/20.
 */
import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text} from 'react-native';

/**
 * 主界面
 */
class MainScreen extends Component {

    static navigationOptions = {
        title: '首页'
    };

    static propTypes = {
        navigation: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.bg}>
                <Text style={styles.welcome}>
                    主界面
                </Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#F6F8FA'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

export default MainScreen;