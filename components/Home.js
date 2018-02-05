import React from 'react'
import { connect } from 'react-redux'
import { FontAwesome } from '@expo/vector-icons'
import { fetchPins, fetchProfile } from '../actions'

import NaviButton from './NaviButton'
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
      headerRight: <NaviButton onPress={handleActionButton}>Login</NaviButton>,
    }
  }

  componentDidMount() {
    this.props.fetchPins()
    this.props.fetchProfile()
  }

  render() {
    return (
      <CardList pins={this.props.pins} />
    )
  }
}

function mapStateToProps(state) {
	const { pins } = state

	return {
		pins,
  }
}

function mapDispatchToProps(dispatch) {
	return {
		fetchPins: () => dispatch(fetchPins()),
    fetchProfile: () => dispatch(fetchProfile()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)