import React from 'react'
import { View, } from 'react-native'

import InfoText from '../InfoText'

const CardHeader = ({ cardType, expirationDate }) => {
  return (
    <View style={styles.container} >
      <InfoText letterSpacing={1}>{cardType}</InfoText>
      <InfoText letterSpacing={1}>{expirationDate}</InfoText>
    </View >
  )
}

export default CardHeader

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}