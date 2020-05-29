import React from 'react'
import { StatusBar, Platform } from 'react-native'

import { StateProvider } from './context'
import TransactionScreen from './Screens/TransactionScreen'


// Polyfill to make Android locale string work.
if (Platform.OS === 'android') {
  require('intl')
  require('intl/locale-data/jsonp/en-US')
  require('intl/locale-data/jsonp/uk-UA')
}

const App = () => (
  <StateProvider>
    {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
    <TransactionScreen />
  </StateProvider>
)

export default App