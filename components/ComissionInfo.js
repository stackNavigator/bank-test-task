import React from 'react'
import { View, Switch, StyleSheet } from 'react-native'

import InfoText from './InfoText'

const ComissionInfo = () => {
  return (
    <View style={styles.container}>
      <InfoText color="#000" fontSize={14} fontWeight="300">Сплатити комісію з отримувача 24.50грн?</InfoText>
      <Switch />
    </View>
  )
}

export default ComissionInfo

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})