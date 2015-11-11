'use strict';

var React = require('react-native');

var { AppRegistry, Text, View, StyleSheet } = React;

class Weekdays extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, World!</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // moves elements heigth wise
    alignItems: 'center' // moves elements width wise
  }
});

AppRegistry.registerComponent('weekdays', () => Weekdays);
