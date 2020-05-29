import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import Header from './Header'
import CardInfo from './CardInfo'
import CardTabMenu from './CardTabMenu'

import { headerCaptions, lightTheme } from '../../shared'
import { store } from '../../context'

const MainComponent = () => {
  const { state: { transactionStep } } = useContext(store)
  return (
    <LinearGradient colors={lightTheme} start={[0, 0]} end={[1, 0]}
      style={styles.gradient}>
      <Header title={headerCaptions[transactionStep]} />
      <CardInfo
        cardType="Golden Dream"
        expirationDate="01/19"
        balanceAmount="2950"
        cardNumber="1234567898762082" />
      {transactionStep === 0 && <CardTabMenu tabsAmount="8" activeIndex={2} />}
    </LinearGradient>
  )
}

export default MainComponent

const styles = StyleSheet.create({
  gradient: {
    justifyContent: 'space-between',
    width: '100%'
  }
})