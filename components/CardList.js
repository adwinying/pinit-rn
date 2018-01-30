import React from 'react'
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native'

import Card from './Card'

export default class CardList extends React.Component {
	handleRefresh = () => {
		console.log('refreshing....')
		this.props.fetchPins()
	}

	render() {
		return (
			<View>
				{ !this.props.pins.length && 
					<View style={styles.activityIndicator}>
						<ActivityIndicator size="large" />
					</View> }
				<FlatList 
					data={this.props.pins}
					keyExtractor={(item) => item._id}
					renderItem={ ({item}) => <Card pin={item} /> }
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