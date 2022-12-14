import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {StackActions} from '@react-navigation/native';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('Home'));
    }, 2000);
  }

  render() {
    return (
      <View>
        <Text>SplashScreen</Text>
      </View>
    );
  }
}

export default SplashScreen;
