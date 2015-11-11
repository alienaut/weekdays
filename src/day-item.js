'use strict';

var React = require('react-native');

var { StyleSheet, Text } = React;

class DayItem extends React.Component {
	render() {
		return (
			<Text style={styles.day}> {this.props.day} </Text>
		);
	}
};

var styles = StyleSheet.create({
	day: {
		fontSize: 18,
		color: '#0000FF'
	}
});


module.exports = DayItem;
