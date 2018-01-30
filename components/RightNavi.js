import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { white } from '../utils/colors'

export default class RightNavi extends React.Component {
	render() {
		return (
			<TouchableOpacity onPress={this.props.onPress}>
				<Text style={styles.rightNavi}>{this.props.children}</Text>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	rightNavi: {
		color: white,
		fontSize: 16,
		paddingRight: 16,
	},
})