'use strict';

var React = require('react-native');

var { AppRegistry, Text, View } = React;

class Weekdays extends React.Component {
  render() {
    return (
      <View> 
        <Text>Hello, World!</Text>
      </View>
    );
  }
} 

AppRegistry.registerComponent('weekdays', () => Weekdays);
