import React from 'react'
import { connect } from 'react-redux'
import { FontAwesome } from '@expo/vector-icons'
import { fetchPins, fetchProfile } from '../actions'

import RightNavi from './RightNavi'
import CardList from './CardList'

import { primaryColor, white } from '../utils/colors'

class Home extends React.Component {
	static navigationOptions = ({ navigation }) => {
	  const handleActionButton = () => {
  		navigation.navigate('Login')
  	}

    return {
    	headerTitle: <FontAwesome name="thumb-tack" size={18} color="white"> PinIt</FontAwesome>,
    	headerTintColor: white,
    	headerStyle: {
    	  backgroundColor: primaryColor,
    	},
    	headerRight: <RightNavi onPress={handleActionButton}>Login</RightNavi>,
    }
  }

	componentDidMount() {
		this.props.fetchPins()
    this.props.fetchProfile()
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
		fetchPins: () => dispatch(fetchPins()),
    fetchProfile: () => dispatch(fetchProfile()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)