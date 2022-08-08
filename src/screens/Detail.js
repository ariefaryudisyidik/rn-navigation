import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>Detail</Text>
        <Text>{this.props.route.params.umur}</Text>
        <Text>{this.props.route.params.nama}</Text>
        <TouchableOpacity onPress={() => this.props.navigation.pop()}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Detail;
