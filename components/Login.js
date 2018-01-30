import React from 'react'
import { WebView } from 'react-native'

import { primaryColor, white } from '../utils/colors'

export default class Login extends React.Component {
	static navigationOptions = {
    headerTitle: 'Login',
    headerTintColor: white,
    headerStyle: {
      backgroundColor: primaryColor,
    },
  }

  handleNavigationStateChange = (state) => {
    if (state.url === "http://pins.nodeapp.iadw.in/") {
      console.log("Logged In?")
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