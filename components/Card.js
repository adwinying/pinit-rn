import React from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { primaryColor, white, red } from '../utils/colors'

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

    const buttonOpacity = () => {
      return pin.didLiked ? 0.5 : 1
    }

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
            <View style={styles.actionButtons} >
              { pin.isOwner && <TouchableOpacity
                style={styles.delButton} 
                onPress={() => {this.props.handleDelete(pin)}} >
                <Text style={styles.buttonText}>
                  <FontAwesome name="trash" size={16} />
                </Text>
              </TouchableOpacity> }
              <TouchableOpacity 
                style={styles.likeButton}
                onPress={() => {this.props.handleLike(pin)}} >
                <Text style={[styles.buttonText, styles.likeButtonText, { opacity: pin.didLiked ? 0.5 : 1.0 }]}>
                  <FontAwesome name="star" size={16} />
                  { ' ' + pin.likedBy.length }
                </Text>
              </TouchableOpacity>
            </View>
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
  actionButtons: {
    flexDirection: 'row',
  },
  likeButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: primaryColor,
    marginLeft: 8,
  },
  likeButtonText: {
    paddingTop: 14,
    backgroundColor: primaryColor, 
    height: 50,
  },
  delButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: red,
    padding: 8,
  },
  buttonText: {
    padding: 8,
    color: "white",
    fontSize: 18,
  },
})