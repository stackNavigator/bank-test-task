import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Entypo, MaterialIcons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import MainComponent from '../components/MainComponent'
import FadedView from '../components/FadedView'
import Input from '../components/Input'
import FractionedInput from '../components/FractionedInput'
import InfoText from '../components/InfoText'
import CardNumber from '../components/MainComponent/CardNumber'
import ComissionInfo from '../components/ComissionInfo'
import Separator from '../components/Separator'
import ActionButton from '../components/ActionButton'

import { actionCaptions, fadeOut } from '../shared'
import { store } from '../context'

const TransactionScreen = () => {
  const { state: { transactionStep, transactionAmount }, dispatch } = useContext(store)
  let amount = transactionAmount
  return (
    <View style={styles.container}>
      <MainComponent />
      {transactionStep === 0 && (
        <FadedView>
          <Input placeholder="На картку іншого банку VISA\MC" letterSpacing={1} isDropDown />
          <FractionedInput maxDigits={4} />
        </FadedView>
      )}
      {transactionStep === 1 && (
        <FadedView>
          <InfoText color="#000" fontWeight="300" marginVertical="5%" >На картку іншого банку</InfoText>
          <View style={styles.cardNumberContainer}>
            <CardNumber cardNumber="1234567898762082" color="#888" disabled={false} />
          </View>
          <Input placeholder="1500.00 грн" placeholderColor="#0f5cbc" fontSize={24} fontWeight="400"
            letterSpacing={1} keyboardType="decimal-pad" onSubmit={value => amount = value}
            autoFocus />
          <ComissionInfo />
        </FadedView>
      )}
      {transactionStep === 2 && (
        <View style={styles.validationContainer}>
          <FadedView>
            <View style={{ marginVertical: '5%' }}>
              <MaterialCommunityIcons name="shield-outline" size={70} color="red" />
            </View>
            <View style={{ alignItems: 'center', marginBottom: '8.5%' }}>
              <InfoText color="#000" fontSize={14}>Введіть пароль з СМС, що надіслано на Ваш номер</InfoText>
              <InfoText color="#000" fontSize={14}>Ніколи не повідомляйте його іншим особам</InfoText>
            </View>
            <View style={{ flexDirection: 'row', width: '90%' }}>
              <InfoText color="#888" fontWeight="200" fontSize={14} marginVertical="3%"
                textTransform="uppercase">
                Пароль з СМС
          </InfoText>
            </View>
            <FractionedInput maxDigits={1} />
          </FadedView>
        </View>
      )}
      {transactionStep === 3 && (
        <View style={styles.confirmationContainer}>
          <FadedView>
            <View style={styles.successContainer}>
              <AntDesign name="like2" size={120} color="#0f5cbc" />
              <InfoText color="#0f5cbc" fontSize={32} letterSpacing={4}>Успішно!</InfoText>
              <InfoText color="#555">Платіж надіслано на опрацювання</InfoText>
            </View>
            <View>
              <Separator />
              <View style={{ alignItems: 'center' }}>
                <InfoText color="#555" fontSize={14}>Шановний Артеме!</InfoText>
                <InfoText color="#555" fontSize={14}>Чи бажаєте додати цю операцію до Ваших шаблонів?</InfoText>
              </View>
            </View>
          </FadedView>
        </View>
      )}
      <ActionButton
        caption={actionCaptions[transactionStep]}
        leftIcon={transactionStep === 3 && <MaterialIcons name="event-note" size={24} color="#539cec" />}
        rightIcon={transactionStep !== 3 && <Entypo name="chevron-thin-right" size={24} color="#888" />}
        onPress={() => {
          fadeOut().start(() => {
            if (transactionStep === 1)
              dispatch({ type: 'UPDATE_TRANSACTION_AMOUNT', transactionAmount: amount })
            dispatch({ type: 'NEXT_STEP' })
          })
        }} />
    </View >
  )
}

export default TransactionScreen

const styles = StyleSheet.create({
  container: {
    flex: 0.95,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  cardNumberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  validationContainer: {
    width: '95%',
    alignItems: 'center'
  },
  confirmationContainer: {
    flex: 1,
    width: '95%',
    alignItems: 'center'
  },
  successContainer: {
    height: '85%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})