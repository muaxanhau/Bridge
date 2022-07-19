import React from 'react'
import { Header, LeftWrapper } from './elements'
import { NamePages, String } from '../../constants'
import { chevronBackOutline } from 'ionicons/icons'
import Title from '../Title/Title'
import ButtonType2 from '../ButtonType2/ButtonType2'
import ButtonIcon from '../ButtonIcon/ButtonIcon'
import { useHistory } from 'react-router-dom'

// constants
const TEXT_COLOR = 'var(--color-3)'

// main
const HeaderBarType1 = ({ children, title, canGoBack = true }) => {
  // constants
  const history = useHistory()

  // handles
  const handleback = () => {
    history.goBack()
  }
  const handleLogout = () => {
    history.push(NamePages.Login)
  }

  // render
  return (
    <Header>
      <LeftWrapper>
        {canGoBack && (
          <ButtonIcon icon={chevronBackOutline} onClick={handleback} />
        )}
        <Title style={{ color: TEXT_COLOR }}>{title}</Title>
      </LeftWrapper>
      {children}
      <ButtonType2 title={String.logout} onClick={handleLogout} />
    </Header>
  )
}

export default HeaderBarType1
