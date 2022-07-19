import React from 'react'
import PopupLayout from '../PopupLayout/PopupLayout'
import { Container } from './elements'
import { String } from '../../constants'
import Styled from '../Styled/Styled'
import ButtonType1 from './../ButtonType1/ButtonType1'
import ButtonIcon from '../ButtonIcon/ButtonIcon'
import InputTextArea from './../InputTextArea/InputTextArea'
import { closeCircleSharp } from 'ionicons/icons'

// main
const PopupMemo = ({ hidden = false, onClickClose = () => {} }) => {
  // constants

  // effects

  // render
  if (hidden) {
    return null
  }

  return (
    <PopupLayout enableScroll={false}>
      <Container>
        <Styled.ContentCol>
          <ButtonIcon
            icon={closeCircleSharp}
            size='40px'
            style={{ alignSelf: 'flex-end' }}
            onClick={onClickClose}
          />
          <InputTextArea rows={10} cols={60} />
          <ButtonType1
            title={String.touroku}
            style={{ alignSelf: 'flex-end' }}
          />
        </Styled.ContentCol>
      </Container>
    </PopupLayout>
  )
}

export default PopupMemo
