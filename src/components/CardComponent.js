
import React from 'react'
import { Card } from 'react-native-paper'
import { Text } from 'react-native'

const CardComponent = (props) => {
    const {item, index} = props

  return (
      <>
        <Card key={index} mode="outlined" style={{ marginVertical: 10 }}>
            <Card.Title title={item.title} subtitle={item.date} />
            <Card.Content
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}
            >
            <Text>Distance : {item.distance} km</Text>
            <Text>Durée : {item.duration}</Text>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        </Card>
      </>
  )
}

export default CardComponent