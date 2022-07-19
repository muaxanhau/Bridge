import React from 'react'
import Text from '../Text/Text'
import { String } from '../../constants'

const TextDate = ({ date = '', month = '', year = '' }) => {
  return (
    <Text>
      {(year || 'N/A') +
        String.year +
        (month || 'N/A') +
        String.month +
        (date || 'N/A') +
        String.date}
    </Text>
  )
}

export default TextDate
