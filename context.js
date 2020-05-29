import React, { createContext, useReducer } from 'react'

import { maxTransactionSteps } from './shared'

const initState = { transactionStep: 0, transactionAmount: '1500.00' }
const store = createContext(initState)
const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, { type, transactionAmount }) => {
    switch (type) {
      case 'NEXT_STEP':
        const transactionStep = state.transactionStep === maxTransactionSteps - 1
          ? 0
          : state.transactionStep + 1
        return { ...state, transactionStep }
      case 'PREVIOUS_STEP':
        if (state.transactionStep === 0)
          return state
        return { ...state, transactionStep: state.transactionStep - 1 }
      case 'UPDATE_TRANSACTION_AMOUNT':
        return { ...state, transactionAmount }
      default:
        return state
    }
  }, initState)
  return (
    <Provider value={{ state, dispatch }}>
      {children}
    </Provider>
  )
}

export { store, StateProvider }