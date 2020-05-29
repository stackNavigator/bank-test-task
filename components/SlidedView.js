import React, { useEffect } from 'react'
import { Animated } from 'react-native'

import { offset, slideIn } from '../shared'

const FadedView = ({ children }) => {
  useEffect(() => {
    slideIn().start()
  }, [])
  return (
    <Animated.View style={[styles.container, { transform: [{ translateX: offset }] }]}>
      {children}
    </Animated.View>
  )
}

export default FadedView

const styles = {
  container: {
    width: '100%',
    alignItems: 'center'
  }
}