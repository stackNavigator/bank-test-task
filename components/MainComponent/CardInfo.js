import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import InfoText from '../InfoText'
import CardHeader from './CardHeader'
import CardNumber from './CardNumber'
import SlidedView from '../SlidedView'

import { mainComponentHeights } from '../../shared'
import { store } from '../../context'

const CardInfo = ({ cardType, expirationDate, balanceAmount, cardNumber }) => {
  const { state: { transactionStep, transactionAmount } } = useContext(store)
  const currency = (0)
    .toLocaleString('uk-UA', {
      style: 'currency',
      currency: 'UAH',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })
    .replace(/\d/g, '')
    .trim()
  const balance = (+balanceAmount).toLocaleString('us-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
  const [intBalance, fractionBalance] = balance.split('.')
  return (
    <View style={[styles.container, {
      marginVertical: mainComponentHeights[transactionStep]
    }]}>
      {transactionStep === 0 && <CardHeader cardType={cardType} expirationDate={expirationDate} />}
      {transactionStep !== 3 && (
        <View style={styles.balance}>
          {transactionStep === 2
            ? (
              <SlidedView>
                <Text>
                  <InfoText fontSize={40} fontWeight="300">{Math.floor(transactionAmount)}.</InfoText>
                  <InfoText fontSize={30} fontWeight="300">
                    {transactionAmount.split('.')[1] ? transactionAmount.split('.')[1] : '00'}
                  </InfoText>
                  <InfoText fontSize={30} fontWeight="300"> грн</InfoText>
                </Text>
              </SlidedView>
            )
            : (
              <Text>
                <InfoText fontSize={30} fontWeight="300">{currency}</InfoText>
                <InfoText fontSize={55} fontWeight="200">{intBalance}.</InfoText>
                <InfoText fontSize={40} fontWeight="200">{fractionBalance}</InfoText>
              </Text>
            )}
        </View>
      )
      }
      {
        transactionStep < 2 && (
          <View style={styles.cardNumber}>
            <CardNumber cardNumber={cardNumber} />
          </View>
        )
      }
    </View >
  )
}

export default CardInfo

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '20%'
  },
  balance: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline'
  },
  cardNumber: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})