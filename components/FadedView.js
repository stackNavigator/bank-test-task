import React, { useEffect } from 'react'
import { Animated } from 'react-native'

import { opacity, fadeIn } from '../shared'

const FadedView = ({ children }) => {
  useEffect(() => {
    fadeIn().start()
  }, [])
  return (
    <Animated.View style={[styles.container, { opacity }]}>
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