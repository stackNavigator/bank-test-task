import React from 'react'
import { View, StyleSheet } from 'react-native'

import { screenWidth } from '../../shared'

const CardTabMenu = ({ tabsAmount, activeIndex = 0 }) => {
  const tabWidth = Math.floor((screenWidth / tabsAmount) - tabsAmount * 2)
  const tabs = []
  for (let i = 0; i < tabsAmount; i++)
    tabs.push(<View key={i} style={[styles.tab, {
      width: tabWidth,
      borderBottomColor: i === activeIndex ? '#fff' : 'rgba(255, 255, 255, 0.5)'
    }]} />)
  return (
    <View style={styles.container}>
      {tabs}
    </View>
  )
}

export default CardTabMenu

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: '4%'
  },
  tab: {
    borderBottomWidth: 3,
    borderBottomColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 3
  }
})