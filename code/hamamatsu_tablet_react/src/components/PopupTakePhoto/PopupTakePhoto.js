import React, { useEffect } from 'react'
import { String } from '../../constants'
import { usePhotoGallery } from './../../utils/hooks'
import PopupLayout from '../PopupLayout/PopupLayout'
import Styled from '../Styled/Styled'
import ButtonType4 from '../ButtonType4/ButtonType4'

const PopupTakePhoto = ({
  hidden = false,
  onClickBackground = () => {},
  onChangePhoto = photo => {}
}) => {
  // constants
  const { photos, getGallery, takePhoto } = usePhotoGallery()

  // effects
  useEffect(() => {
    if (!photos.length) {
      return
    }

    onChangePhoto(photos[photos.length - 1])
  }, [JSON.stringify(photos)])

  // render
  if (hidden) {
    return null
  }

  return (
    <PopupLayout onClickBackground={onClickBackground} enableScroll={false}>
      <Styled.ContentRow
        style={{
          padding: 'var(--padding-1)',
          backgroundColor: 'var(--color-11)'
        }}
      >
        <ButtonType4
          title={String.fairu_sentaku}
          onClick={() => getGallery({ onFinally: onClickBackground })}
        />
        <ButtonType4
          title={String.kamera_kidou}
          onClick={() => takePhoto({ onFinally: onClickBackground })}
        />
      </Styled.ContentRow>
    </PopupLayout>
  )
}

export default PopupTakePhoto
