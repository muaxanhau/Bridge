import React, { useEffect, useReducer, useRef } from 'react'
import { String, SQLite } from './../../constants'
import { useQuery } from '../../utils/hooks'
import { getImageShindan } from './../../utils/commons'
import { Container, TypeContainer } from './elements'
import Styled from './../Styled/Styled'
import Text from './../Text/Text'
import ButtonType4 from './../ButtonType4/ButtonType4'
import ButtonIcon from './../ButtonIcon/ButtonIcon'
import InputCheckBox from './../InputCheckBox/InputCheckBox'
import { caretDownOutline, chevronUpOutline } from 'ionicons/icons'
import { reducer } from './reducer'

// constants
const ICON_SIZE = '30px'

// main
const TableHanrei = ({
  onChange = (listShindanChecked = [], flgTablet) => {}
}) => {
  // state
  const [state, dispatch] = useReducer(reducer, {
    isMinimize: false,
    dataListShindan: [],
    flgTablet: 1
  })

  // constants
  const refListShindanChecked = useRef([])

  // query - mutation
  const queryListShindan = useQuery({
    queryString:
      SQLite.QueryString.MShindan.select.CodeShindan_NameShindan.pure,
    onSuccess: data => {
      dispatch({ type: 'SET_DATA_LIST_SHINDAN', payload: data })
    }
  })

  // handles
  const handleToggleMinimize = () => {
    dispatch({ type: state.isMinimize ? 'MAXIMIZE' : 'MINIMIZE' })
  }
  const handleOnChangeHanrei = () => {
    onChange(
      refListShindanChecked.current
        .filter(item => item.checked)
        .map(item => parseInt(item.id)),
      state.flgTablet
    )
  }
  const handleZenSentaku = () => {
    refListShindanChecked.current.forEach(item => (item.checked = true))

    handleOnChangeHanrei()
  }
  const handleZenKaijo = () => {
    refListShindanChecked.current.forEach(item => (item.checked = false))

    handleOnChangeHanrei()
  }
  const handleKirikae = () => {
    dispatch({ type: 'TOGGLE_FLG_TABLET' })
  }

  // effects
  useEffect(() => {
    state.dataListShindan.length && handleZenSentaku()
  }, [state.dataListShindan])
  useEffect(() => {
    handleOnChangeHanrei()
  }, [state.flgTablet])

  // render
  return (
    <Container show={!state.isMinimize} minHeight={ICON_SIZE}>
      <Text
        style={{
          position: 'absolute',
          top: `calc(var(--padding-1) / 2 + (${ICON_SIZE} - var(--font-size) * 1.4) / 2)`,
          left: 'calc(var(--padding-1) / 2)',
          zIndex: 1
        }}
      >
        {String.hanrei} (
        {state.flgTablet === 1 ? String.konkai_tenken : String.zenkai_tenken})
      </Text>
      <ButtonIcon
        style={{
          position: 'absolute',
          top: 'calc(var(--padding-1) / 2)',
          right: 'calc(var(--padding-1) / 2)',
          zIndex: 1
        }}
        size={ICON_SIZE}
        icon={state.isMinimize ? chevronUpOutline : caretDownOutline}
        color='var(--color-6)'
        onClick={handleToggleMinimize}
      />

      <Styled.ContentCol>
        <Styled.ContentRow>
          <ButtonType4
            title={String.zen_sentaku}
            size='small'
            onClick={handleZenSentaku}
          />
          <ButtonType4
            title={String.zen_kaijo}
            size='small'
            onClick={handleZenKaijo}
          />
          <ButtonType4
            title={String.kirikae}
            size='small'
            onClick={handleKirikae}
          />
          <div style={{ width: `calc(${ICON_SIZE} * 1.5)` }} />
        </Styled.ContentRow>

        {state.dataListShindan.map((item, index) => {
          return (
            <Styled.ContentRow
              key={index.toString()}
              style={{ alignItems: 'center' }}
            >
              <InputCheckBox
                id={item.CODE_SHINDAN}
                ref={element => {
                  refListShindanChecked.current[index] = element
                }}
                onChange={handleOnChangeHanrei}
              />
              <TypeContainer htmlFor={item.CODE_SHINDAN}>
                <Styled.Image
                  src={getImageShindan(item.CODE_SHINDAN)}
                  width={ICON_SIZE}
                />
                <Text>{item.NAME_SHINDAN || String.sue_tenken}</Text>
              </TypeContainer>
            </Styled.ContentRow>
          )
        })}
      </Styled.ContentCol>
    </Container>
  )
}

export default TableHanrei
