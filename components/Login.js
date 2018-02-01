import React from 'react'
import { connect } from 'react-redux'
import { WebView } from 'react-native'
import { fetchProfile } from '../actions'

import { primaryColor, white } from '../utils/colors'

import NaviButton from './NaviButton'

class Login extends React.Component {
	static navigationOptions = ({ navigation }) => {
    const handleCancel = () => {
      navigation.goBack()
    }
    
    return {
      headerTitle: 'Login',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: primaryColor,
      },
      headerLeft: <NaviButton onPress={handleCancel}>Cancel</NaviButton>
    }
  }

  handleNavigationStateChange = (state) => {
    if (state.url === "http://pins.nodeapp.iadw.in/") {
      this.props.fetchProfile()
      this.props.navigation.goBack()
    }
  }

  render() {
    return (
      <WebView
        source={{uri: 'http://pins.nodeapp.iadw.in/api/auth/login'}}
        onNavigationStateChange={this.handleNavigationStateChange}
      />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProfile: () => dispatch(fetchProfile()),
  }
}

export default connect(null, mapDispatchToProps)(Login)