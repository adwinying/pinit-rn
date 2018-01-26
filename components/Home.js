import React from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import { getAllPins } from '../utils/api'
import { fetchPins } from '../actions'

import Card from './Card'

class Home extends React.Component {
	componentDidMount() {
		this.props.fetchPins()
		// console.log(this.props)
	}

	render() {
		return (
			<ScrollView>
				{this.props.pins.map((pin) => 
					<Card key={pin._id} pin={pin} />
				)}
			</ScrollView>
		)
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