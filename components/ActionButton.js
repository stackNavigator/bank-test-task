import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import InfoText from '../components/InfoText'

const ActionButton = ({ caption, leftIcon, rightIcon, onPress }) => {
  return (
    <LinearGradient colors={['#539cec', '#0f5cbc']} start={[0, 0]} end={[1, 0]} style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <View style={styles.icon}>
          {leftIcon}
        </View>
        <InfoText color="#000" letterSpacing={1} fontWeight="300" textTransform="uppercase">
          {caption}
        </InfoText>
        <View style={styles.icon}>
          {rightIcon}
        </View>
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default ActionButton

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderRadius: 24,
    marginTop: 15,
    paddingRight: 2
  },
  button: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 12,
    margin: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  icon: {
    alignItems: 'center',
    width: '25%'
  }
})