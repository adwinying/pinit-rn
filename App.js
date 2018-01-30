import React from 'react'
import { StyleSheet, View, StatusBar, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'

import { Provider } from 'react-redux'
import store from './configureStore'

import Home from './components/Home'
import Login from './components/Login'

const RootNavigator = StackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
}, {
  mode: 'modal',
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <RootNavigator />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

