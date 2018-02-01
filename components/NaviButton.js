import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { white } from '../utils/colors'

export default class NaviButton extends React.Component {
	render() {
		return (
			<TouchableOpacity onPress={this.props.onPress}>
				<Text style={styles.naviButton}>{this.props.children}</Text>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	naviButton: {
		color: white,
		fontSize: 16,
		padding: 16,
	},
})