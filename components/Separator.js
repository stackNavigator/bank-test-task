import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const Separator = ({ marginBottom = '6.5%' }) => (
  <LinearGradient colors={['#eee', '#ccc', '#eee']}
    start={[0, 0]}
    end={[1, 0]}
    locations={[0, 0.5, 1]}
    style={{ height: 1, marginBottom }} />
)

export default Separator