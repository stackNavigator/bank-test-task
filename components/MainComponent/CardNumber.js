import React from 'react'
import InfoText from '../InfoText'

import { splitByDigitsAmount } from '../../shared'

const CardNumber = ({ cardNumber, color, disabled = true }) => splitByDigitsAmount(cardNumber, 4)
  .map((part, i) => {
    const text = disabled && i !== 3 ? 'XXXX' : part
    return <InfoText key={i} color={color} fontWeight="300" letterSpacing={1}>{text}</InfoText>
  })

export default CardNumber