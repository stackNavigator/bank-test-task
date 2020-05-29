import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react'
import { TextInput, View, StyleSheet, Clipboard } from 'react-native'
import { Entypo } from '@expo/vector-icons'

import Separator from './Separator'

const Input = ({ maxDigits, triggerNextInput, triggerPreviousInput, onSubmit, paste, placeholder,
  placeholderColor = '#000', fontSize = 16, fontWeight = '300', letterSpacing = 4, width = '90%',
  keyboardType = 'default', autoFocus = false, isDropDown = false }, ref) => {
  const [value, setValue] = useState('')
  const [isEmpty, setIsEmpty] = useState(true)
  const inputRef = useRef(null)
  useImperativeHandle(ref, () => inputRef.current)

  const handleChangedText = async text => {
    setValue(text)
    if (paste) {
      const content = await Clipboard.getString()
      if (content.slice(0, maxDigits) === text)
        paste(content)
    }
    if (triggerNextInput && text.length === maxDigits)
      triggerNextInput()
    if (isEmpty)
      setIsEmpty(false)
    if (onSubmit)
      onSubmit(text)
  }

  const handleBackspacePress = () => {
    if (triggerPreviousInput && !isEmpty && value.length === 0) {
      triggerPreviousInput()
      setIsEmpty(true)
    }
  }

  return (
    <View style={{ width }}>
      <TextInput
        ref={inputRef}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        keyboardType={keyboardType}
        autoFocus={autoFocus}
        editable={!isDropDown}
        maxLength={maxDigits}
        value={value}
        onKeyPress={({ nativeEvent: { key } }) => key === 'Backspace' && handleBackspacePress()}
        onChangeText={text => handleChangedText(text)}
        style={[styles.input, {
          fontSize,
          fontWeight,
          textAlign: isDropDown ? 'auto' : 'center',
          letterSpacing
        }]} />
      <Separator />
      {isDropDown && <Entypo name="chevron-thin-down" size={20} color="#888" style={styles.icon} />}
    </View >
  )
}

export default forwardRef(Input)

const styles = StyleSheet.create({
  input: {
    padding: 5,
    marginTop: '6.5%'
  },
  icon: {
    position: 'absolute',
    right: 1,
    bottom: '37%'
  }
})