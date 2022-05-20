import { ScrollView } from 'react-native'
import React from 'react'

import CardComponent from './CardComponent'

const customData = require('../api/customData.json')

const CardsComponent = () => {
  return (
    <ScrollView>
    {customData.map((item, index) => {
      return (
        <CardComponent item={item} key={index} />
      )
    })}
  </ScrollView>
  )
}

export default CardsComponent