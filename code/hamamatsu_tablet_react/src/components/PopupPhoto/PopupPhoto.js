import React from 'react'
import { Image } from './elements'
import PopupLayout from '../PopupLayout/PopupLayout'

const PopupPhoto = ({
  hidden = false,
  image = null,
  onClickBackground = () => {}
}) => {
  if (hidden) {
    return null
  }

  return (
    <PopupLayout onClickBackground={onClickBackground} enableScroll={false}>
      <Image src={image} />
    </PopupLayout>
  )
}

export default PopupPhoto
