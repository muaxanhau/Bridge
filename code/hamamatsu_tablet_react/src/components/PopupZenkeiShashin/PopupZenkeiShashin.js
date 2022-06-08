import React, { useEffect, useReducer, useRef } from 'react'
import { Container, RightContent } from './elements'
import { closeCircleSharp } from 'ionicons/icons'
import { String, SQLite } from './../../constants'
import PopupLayout from '../PopupLayout/PopupLayout'
import Styled from './../Styled/Styled'
import Text from './../Text/Text'
import ButtonIcon from './../ButtonIcon/ButtonIcon'
import ButtonType1 from './../ButtonType1/ButtonType1'
import ButtonType4 from './../ButtonType4/ButtonType4'
import InputTextArea from './../InputTextArea/InputTextArea'
import PopupSentaku from '../PopupSentaku/PopupSentaku'
import { useQuery, useMutation } from '../../utils/hooks'

// constants
const TEXT_COLOR = 'var(--color-6)'

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_SENTAKU_POPUP':
      return {
        ...state,
        showSentakuPopup: true
      }
    case 'HIDE_SENTAKU_POPUP':
      return {
        ...state,
        showSentakuPopup: false
      }
    case 'SET_TXTA_SHOKENTOU':
      return {
        ...state,
        txtaShokentou: action.payload
      }
    default:
      return state
  }
}

// main
const PopupZenkeiShashin = ({
  hidden = false,
  noGyoumu,
  bridgeID,
  onClickClose = () => {},
  onClickTojika = () => {},
  onClickTouroku = () => {}
}) => {
  // state
  const [state, dispatch] = useReducer(reducer, {
    txtaShokentou: undefined,

    showSentakuPopup: false
  })

  // constants
  const refTxtaShokentou = useRef()

  // query - mutation
  const querySelectBikou = useQuery({
    queryString:
      SQLite.QueryString.TenkenhyoGazouTemp.select.Bikou.by.NoGyoumu_BridgeID
        .with.FlgTabletEqual1_GazouIDNoEqual0,
    params: [noGyoumu, bridgeID],
    onSuccess: data => {
      refTxtaShokentou.current.value = data[0].BIKOU
    }
  })
  const mutationUpdateBikou = useMutation({
    queryString:
      SQLite.QueryString.TenkenhyoGazouTemp.update.Bikou.by.NoGyoumu_BridgeID
        .with.FlgTabletEqual1_GazouIDNoEqual0
  })

  // handles
  const handleShowSentakuPopup = () => {
    dispatch({ type: 'SHOW_SENTAKU_POPUP' })
  }
  const handleTouroku = () => {
    mutationUpdateBikou.execute([
      refTxtaShokentou.current.value,
      noGyoumu,
      bridgeID
    ])

    onClickTouroku()
    onClickClose()
  }
  const handleHideSentakuPopup = () => {
    dispatch({ type: 'HIDE_SENTAKU_POPUP' })
  }
  const handleOnClickNyuuryoku = txtaShokentou => {
    dispatch({ type: 'SET_TXTA_SHOKENTOU', payload: txtaShokentou })
  }

  // effects
  useEffect(() => {
    !hidden && querySelectBikou.reExecute()
  }, [hidden])
  useEffect(() => {
    if (state.txtaShokentou === undefined) {
      return
    }
    refTxtaShokentou.current.value = state.txtaShokentou
  }, [state.txtaShokentou])

  // render
  if (hidden) {
    return null
  }

  return (
    <>
      <PopupLayout enableScroll={false}>
        <Container>
          <Styled.ContentCol>
            <ButtonIcon
              icon={closeCircleSharp}
              size='40px'
              style={{ alignSelf: 'flex-end' }}
              onClick={onClickClose}
            />

            <Styled.ContentRow>
              <RightContent>
                <Styled.ContentCol>
                  <Text style={{ color: TEXT_COLOR, textAlign: 'center' }}>
                    {String.shokentou}
                  </Text>
                  <ButtonType4
                    title={String.sentaku}
                    onClick={handleShowSentakuPopup}
                  />
                </Styled.ContentCol>
              </RightContent>
              <InputTextArea
                cols={60}
                style={{ flex: 2, flexShrink: 0 }}
                ref={refTxtaShokentou}
              />
            </Styled.ContentRow>

            <Styled.ContentRow style={{ justifyContent: 'flex-end' }}>
              <ButtonType1
                title={String.tojika}
                color='green'
                onClick={onClickTojika}
              />
              <ButtonType1 title={String.touroku} onClick={handleTouroku} />
            </Styled.ContentRow>
          </Styled.ContentCol>
        </Container>
      </PopupLayout>

      <PopupSentaku
        hidden={!state.showSentakuPopup}
        onClickClose={handleHideSentakuPopup}
        onClickNyuuryoku={handleOnClickNyuuryoku}
      />
    </>
  )
}

export default PopupZenkeiShashin
