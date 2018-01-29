import React from 'react'
import { FlatList, Text } from 'react-native'

import Card from './Card'

export default class CardList extends React.Component {

	render() {
		const keyedData = this.props.pins.map((pin) =>{
			return {
				...pin,
				key: pin._id,
			}
		})

		return (
			<FlatList 
				data={keyedData}
				renderItem={ ({item}) => <Card pin={item} /> }
			/>
		)
	}
}