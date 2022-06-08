import React from 'react'
import { Button } from './element'
import Text from './../Text/Text'

// constants
const TEXT_COLOR = 'var(--color-6)'

// main
const ButtonType4 = ({
  title = '',
  size = 'large',
  onClick = () => {},
  type = 'button'
}) => {
  return (
    <Button onClick={onClick} type={type} size={size}>
      <Text style={{ color: TEXT_COLOR }}>{title}</Text>
    </Button>
  )
}

export default ButtonType4
