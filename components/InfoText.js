import React from 'react'
import { Text } from 'react-native'

const InfoText = ({ color = '#fff', fontSize = 18, fontWeight = '400', letterSpacing = 0,
  marginVertical = 0, textTransform = 'none', children }) => (
    <Text style={{
      color, fontSize, fontWeight, letterSpacing, marginVertical, textTransform, textAlign: 'center'
    }}>
      {children}
    </Text>
  )

export default InfoText