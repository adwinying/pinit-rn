import React from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { primaryColor, white } from '../utils/colors'

export default class Card extends React.Component {

  state = {
    isImageNotFound: false,
    screenWidth: Dimensions.get('window').width,
    pinImageWidth: undefined,
    pinImageHeight: undefined,
  }

  componentDidMount() {
    Image.getSize(this.props.pin.imageURL, (width, height) => {
      this.setState({
        pinImageWidth: width,
        pinImageHeight: height,
      })
    }, () => {
      this.setState({
        pinImageWidth: 400,
        pinImageHeight: 230,
      })
    })
  }

  getMainContentWidth() {
    return this.state.screenWidth 
      - (16 * 2)  // styles.container.padding
      - (1 * 2)   // styles.card.borderWidth
      - (8 * 2)   // styles.mainContent.padding
  }

  render() {
    const { pin } = this.props
    const mainContentWidth = this.getMainContentWidth()
    const missingImage = require('../assets/missing.png')

    const pinImage = this.state.isImageNotFound ? 
      missingImage : { uri: pin.imageURL }

    const actualPinImageHeight = this.state.pinImageHeight / 
      this.state.pinImageWidth * mainContentWidth

    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.mainContent}>
            <Image source={pinImage} 
              style={{ width: mainContentWidth, height: actualPinImageHeight }}  
              onError={() => { this.setState({ isImageNotFound: true }) }} />
            <Text style={styles.caption}>{pin.title}</Text>
          </View>

          <View style={styles.actionBar}>
            <Image source={{ uri: pin.owner.profileImageURL} }
              style={styles.profileImage} />
            <TouchableOpacity style={styles.likeButton}>
              <Text style={styles.likeButtonText}>
                <FontAwesome name="star" size={16} />
                { ' ' + pin.likedBy.length }
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  card: {
    borderWidth: 1,
    borderColor: '#999',
  },
  mainContent: {
    padding: 8,
    backgroundColor: white,
  },
  caption: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
  },
  actionBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ccc',
    padding: 8,
  },
  profileImage: {
    width: 50,
    height: 50,
  },
  likeButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primaryColor,
  },
  likeButtonText: {
    padding: 8,
    color: "white",
    fontSize: 18,
  },
})