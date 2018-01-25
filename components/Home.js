import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { getAllPins } from '../utils/api'
import { fetchPins } from '../actions'

class Home extends React.Component {
	componentDidMount() {
		this.props.fetchPins()
		console.log(this.props)
	}

	render() {
		const titles = this.props.pins.map(
			(pin) => <Text key={pin._id}>{pin.title}</Text>
		)

		return <View>{titles}</View>
	}
}

function mapStateToProps(state) {
	const { pins, isFetching, hasError } = state

	return {
		pins,
		isFetching,
		hasError
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchPins: () => dispatch(fetchPins())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)