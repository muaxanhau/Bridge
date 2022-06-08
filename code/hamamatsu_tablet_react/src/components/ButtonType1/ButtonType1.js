import React from 'react'
import { Button } from './element'
import Text from '../Text/Text'

// constants
const TEXT_COLOR = 'var(--color-3)'

// main
const ButtonType1 = ({
  title = '',
  onClick = () => {},
  type = 'button',
  light = false,
  size = 'large',
  style = {},
  color = 'blue'
}) => {
  const blue = light ? 'var(--color-10)' : 'var(--color-8)'
  const green = light ? 'var(--color-14)' : 'var(--color-11)'
  const orange = light ? 'var(--color-12)' : 'var(--color-13)'
  const backgroundColor =
    color === 'green' ? green : color === 'orange' ? orange : blue

  return (
    <Button
      onClick={onClick}
      type={type}
      light={light}
      size={size}
      style={{ ...style, backgroundColor }}
    >
      <Text style={{ color: TEXT_COLOR }}>{title}</Text>
    </Button>
  )
}

export default ButtonType1
