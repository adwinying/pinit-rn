import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import { primaryColor } from './utils/colors'

import { Provider } from 'react-redux'
import store from './configureStore'

import Home from './components/Home'

const RootNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: (<FontAwesome name="thumb-tack" size={18} color="white"> PinIt</FontAwesome>),
      headerTintColor: "#eee",
      headerStyle: {
        backgroundColor: primaryColor,
      },
    },
  },
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
