import React from 'react'
import { connect } from 'react-redux'
import { getAllPins } from '../utils/api'
import { fetchPins } from '../actions'

import CardList from './CardList'

class Home extends React.Component {
	componentDidMount() {
		this.props.fetchPins()
	}

	render() {
		return (
			<CardList 
				pins={this.props.pins} 
				isFetching={this.props.isFetching}
				fetchPins={this.props.fetchPins}
			/>
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