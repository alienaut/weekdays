'use strict';

var React = require('react-native');
var DayItem = require('./src/day-item');

var { AppRegistry, Text, View, StyleSheet } = React;

var DAYS = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]

class Weekdays extends React.Component {
  days() {
    return DAYS.map((day) => (
      <DayItem day={day} />
    ));
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> Days of the week: </Text>
        {this.days()}
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
