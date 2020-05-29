import React, { useRef } from 'react'
import { View, StyleSheet } from 'react-native'

import Input from './Input'
import { splitByDigitsAmount } from '../shared'

const FractionedInput = ({ maxDigits }) => {
  const inputs = useRef([])

  const triggerInput = index => inputs.current[index].focus()

  const pasteToInputs = text => {
    const fractionedText = splitByDigitsAmount(text, maxDigits)
    inputs.current.forEach((input, i) => {
      input.focus()
      input.setNativeProps({ text: fractionedText[i] })
    })
  }

  return (
    <View style={styles.container}>
      <Input maxDigits={maxDigits} triggerNextInput={() => triggerInput(1)}
        paste={text => pasteToInputs(text)} ref={input => inputs.current[0] = input}
        placeholder={maxDigits === 1 ? '1' : '1234'} placeholderColor="#888" width="20%"
        keyboardType="number-pad" autoFocus />
      <Input maxDigits={maxDigits} triggerNextInput={() => triggerInput(2)}
        triggerPreviousInput={() => triggerInput(0)} ref={input => inputs.current[1] = input}
        placeholder={maxDigits === 1 ? '5' : '5678'} placeholderColor="#888" width="20%"
        keyboardType="number-pad" />
      <Input maxDigits={maxDigits} triggerNextInput={() => triggerInput(3)}
        triggerPreviousInput={() => triggerInput(1)} ref={input => inputs.current[2] = input}
        placeholder={maxDigits === 1 ? '9' : '9876'} placeholderColor="#888" width="20%"
        keyboardType="number-pad" />
      <Input maxDigits={maxDigits} triggerPreviousInput={() => triggerInput(2)}
        ref={input => inputs.current[3] = input} placeholder={maxDigits === 1 ? '5' : '5432'}
        placeholderColor="#888" width="20%" keyboardType="number-pad" />
    </View>
  )
}

export default FractionedInput

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})