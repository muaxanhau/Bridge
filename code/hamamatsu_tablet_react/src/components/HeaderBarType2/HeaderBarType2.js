import React, { useState } from 'react'
import {
  SideBar,
  SideBarHeader,
  SideBarBody,
  RightContent,
  MainContent,
  HeaderBar,
  HeaderBarLeftArea
} from './elements'
import { NamePages, String } from '../../constants'
import { chevronBackOutline, menuOutline } from 'ionicons/icons'
import Title from '../Title/Title'
import ButtonType2 from '../ButtonType2/ButtonType2'
import ButtonIcon from '../ButtonIcon/ButtonIcon'
import Styled from './../Styled/Styled'
import ItemGroup from '../ItemGroup/ItemGroup'
import PopupMemo from './../PopupMemo/PopupMemo'
import { useHistory } from 'react-router-dom'

// constants
const TEXT_COLOR = 'var(--color-3)'

// main
const HeaderBarType2 = ({ children, title, data = [] }) => {
  // constants
  const history = useHistory()
  const [showSideBar, setShowSideBar] = useState(true)
  const [showMemoPopup, setShowMemoPopup] = useState(false)

  // handles
  const handleback = () => {
    history.goBack()
  }
  const handleLogout = () => {
    history.push(NamePages.Login)
  }
  const handleToggltSideBar = () => {
    setShowSideBar(prev => (prev = !prev))
  }
  const handleShowMemoPopup = () => {
    setShowMemoPopup(prev => (prev = true))
  }
  const handleHideMemoPopup = () => {
    setShowMemoPopup(prev => (prev = false))
  }

  // effects

  // render
  return (
    <>
      <PopupMemo hidden={!showMemoPopup} onClickClose={handleHideMemoPopup} />

      <Styled.Container style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar show={showSideBar}>
          <SideBarHeader>
            <ButtonIcon icon={chevronBackOutline} onClick={handleback} />
            <Title style={{ color: 'var(--color-3)' }}>{String.menu}</Title>
          </SideBarHeader>

          <SideBarBody>
            <ItemGroup data={data} />
          </SideBarBody>
        </SideBar>

        <RightContent>
          <HeaderBar>
            <HeaderBarLeftArea>
              <ButtonIcon icon={menuOutline} onClick={handleToggltSideBar} />
              <Title style={{ color: TEXT_COLOR }}>{title}</Title>
              <ButtonType2 title={String.memo} onClick={handleShowMemoPopup} />
            </HeaderBarLeftArea>

            <ButtonType2 title={String.logout} onClick={handleLogout} />
          </HeaderBar>

          <MainContent>{children}</MainContent>
        </RightContent>
      </Styled.Container>
    </>
  )
}

export default HeaderBarType2
