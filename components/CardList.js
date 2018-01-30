import React from 'react'
import { FlatList, Text } from 'react-native'

import Card from './Card'

export default class CardList extends React.Component {
	handleRefresh = () => {
		console.log('refreshing....')
		this.props.fetchPins()
	}

	render() {
		return (
			<FlatList 
				data={this.props.pins}
				keyExtractor={(item) => item._id}
				renderItem={ ({item}) => <Card pin={item} /> }
				refreshing={ this.props.isFetching } 
				onRefresh={ this.handleRefresh }
			/>
		)
	}
}