import React, { useContext } from 'react'
import { SafeAreaView, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Entypo, FontAwesome5, MaterialIcons } from '@expo/vector-icons'

import InfoText from '../InfoText'
import { headerTopPadding, fadeOut } from '../../shared'
import { store } from '../../context'

const Header = ({ title }) => {
  const { state: { transactionStep }, dispatch } = useContext(store)
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity style={[styles.headerElement, styles.headerLeft]}
          onPress={() => {
            transactionStep === 3
              ? fadeOut().start(() => dispatch({ type: 'NEXT_STEP' }))
              : transactionStep !== 0 && fadeOut().start(() => dispatch({ type: 'PREVIOUS_STEP' }))
          }}>
          {transactionStep === 3
            ? <MaterialIcons name="close" size={28} color="#fff" />
            : <Entypo name="chevron-thin-left" size={24} color="#fff" />
          }
          {transactionStep === 3
            ? <InfoText fontSize={15}>Закрити</InfoText>
            : <InfoText fontSize={16}>Назад</InfoText>
          }
        </TouchableOpacity>
        <View style={[styles.headerElement, styles.headerCaption]}>
          <InfoText fontSize={16}>{title}</InfoText>
        </View>
        <View style={styles.headerElement}>
          <FontAwesome5 name="bell" size={18} color="#fff" />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingTop: headerTopPadding
  },
  headerElement: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerLeft: {
    justifyContent: 'flex-start'
  },
  headerCaption: {
    flex: 1
  }
})