import React from 'react'
import { Button } from './element'
import Text from '../Text/Text'

// constants
const TEXT_COLOR = 'var(--color-11)'

// main
const ButtonType2 = ({ title = '', onClick = () => {}, type = 'button' }) => {
  return (
    <Button onClick={onClick} type={type}>
      <Text style={{ color: TEXT_COLOR }}>{title}</Text>
    </Button>
  )
}

export default ButtonType2
