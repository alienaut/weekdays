'use strict';

var React = require('react-native');
var Moment = require('moment');

var DayItem = require('./src/day-item');

var { AppRegistry, Text, View, StyleSheet } = React;

class Weekdays extends React.Component {
  days() {
    var dayItems = [];

    for(var i = 0; i < 7; i++) {
      var day = Moment().add(i, 'days').format('dddd');
      dayItems.push(<DayItem day={day} daysUntil={i} />)
    }

    return dayItems;
  }
  render() {
    return (
      <View style={styles.container}>
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
