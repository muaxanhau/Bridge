import React from 'react'
import { Container, Wrapper } from './elements'
import { IonContent } from '@ionic/react'

const PopupLayout = ({
  children,
  onClickBackground = () => {},
  enableScroll = true
}) => {
  const onClick = e => {
    e.stopPropagation()
    if (e.target === e.currentTarget) {
      onClickBackground()
    }
  }

  if (enableScroll) {
    return (
      <Container>
        <IonContent scrollY={true} onClick={onClick}>
          <Wrapper>{children}</Wrapper>
        </IonContent>
      </Container>
    )
  }

  return (
    <Container
      onClick={onClick}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Wrapper>{children}</Wrapper>
    </Container>
  )
}

export default PopupLayout
