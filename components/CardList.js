import React from 'react'
import { connect } from 'react-redux'
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native'
import { fetchPins, updatePin } from '../actions'

import Card from './Card'

class CardList extends React.Component {
	handleRefresh = () => {
		this.props.fetchPins()
	}

	handleLikeButton = (pin) => {
		console.log('like button toggled')
    const updatedPin = {
      ...pin,
      likedBy: pin.didLiked ? 
        pin.likedBy.filter(id => id !== this.props.user._id) :
        [...pin.likedBy, this.props.user._id]
    }

    this.props.updatePin(updatedPin)
	}

	handleDeleteButton = (pin) => {
		console.log('delete button pressed', pin)
	}

	render() {
		const mappedPins = this.props.pins.map((pin) => {
			if(this.props.user) {
				return {
					isOwner: pin.owner._id === (this.props.user && this.props.user._id),
					didLiked: pin.likedBy.includes(this.props.user._id),
					...pin,
				}
			} else {
				return {
					isOwner: false,
					didLiked: false,
					...pin,
				}
			}
		})

		return (
			<View>
				{ !this.props.pins.length && 
					<View style={styles.activityIndicator}>
						<ActivityIndicator size="large" />
					</View> }
				<FlatList 
					data={mappedPins}
					keyExtractor={(item) => item._id}
					renderItem={ ({item}) => 
						<Card pin={item} 
							handleDelete={this.handleDeleteButton}
							handleLike={this.handleLikeButton}
						/> 
					}
					refreshing={ this.props.isFetching } 
					onRefresh={ this.handleRefresh }
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	activityIndicator: {
		padding: 20,
	},
})

function mapStateToProps(state) {
  const { isFetching, hasError, profile } = state

  return {
    isFetching,
    hasError,
    user: profile,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPins: () => dispatch(fetchPins()),
    updatePin: (pin) => dispatch(updatePin(pin)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList)