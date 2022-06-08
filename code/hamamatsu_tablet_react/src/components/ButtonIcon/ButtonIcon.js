import React from 'react'
import { IonIcon } from '@ionic/react'

// constants
const ICON_SIZE = '30px'
const ICON_COLOR = 'var(--color-3)'

// main
const ButtonIcon = ({
  onClick = () => {},
  icon,
  size = ICON_SIZE,
  color = ICON_COLOR,
  style = {}
}) => {
  return (
    <IonIcon
      style={{ ...style, color, fontSize: size, aspectRatio: 1 }}
      icon={icon}
      onClick={onClick}
    />
  )
}

export default ButtonIcon
