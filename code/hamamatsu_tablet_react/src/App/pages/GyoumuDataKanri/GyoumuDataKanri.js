import React, { useEffect, useReducer } from 'react'
import { String, SQLite } from '../../constants'
import { playCircleOutline, caretBackCircleOutline } from 'ionicons/icons'
import { ContentContainer, TableWrapper } from './elements'
import {
  Styled,
  HeaderBarType1,
  Title,
  ButtonIcon,
  TableGyoumuType2
} from './../../components'
import { useQuery } from './../../utils/hooks'
import { reducer } from './reducer'

// constants
const BUTTON_ICON_SIZE = '45px'
const BUTTON_COLOR = 'var(--color-11)'

// main
const GyoumuDataKanri = () => {
  // state
  const [state, dispatch] = useReducer(reducer, {
    dataListGyoumu1: [],
    dataListGyoumu2: []
  })

  // constants

  // query - mutation
  const queryMGyoumu = useQuery({
    queryString: SQLite.QueryString.MGyoumu.select.all.orderBy.NendoDesc.pure,
    onSuccess: data => {
      dispatch({ type: 'SET_DATA_LIST_GYOUMU_1', payload: data })
    }
  })

  // handles
  const onChangeItemSelected1 = id => {
    console.log(id)
  }
  const onChangeItemSelected2 = id => {
    console.log(id)
  }

  // effects

  // render
  return (
    <Styled.Container>
      <HeaderBarType1 title={String.gyoumu_data_kanri} />

      <ContentContainer>
        <Styled.ContentCol style={{ flex: 1 }}>
          <Title>{String.tablet}</Title>
          <TableWrapper>
            <TableGyoumuType2
              data={state.dataListGyoumu1}
              onChangeItemSelected={onChangeItemSelected1}
            />
          </TableWrapper>
        </Styled.ContentCol>

        <Styled.ContentCol style={{ alignSelf: 'center' }}>
          <ButtonIcon
            size={BUTTON_ICON_SIZE}
            icon={playCircleOutline}
            color={BUTTON_COLOR}
          />
          <ButtonIcon
            size={BUTTON_ICON_SIZE}
            icon={caretBackCircleOutline}
            color={BUTTON_COLOR}
          />
        </Styled.ContentCol>

        <Styled.ContentCol style={{ flex: 1 }}>
          <Title>{String.onrainsutore_ji}</Title>
          <TableWrapper>
            <TableGyoumuType2
              data={state.dataListGyoumu2}
              onChangeItemSelected={onChangeItemSelected2}
            />
          </TableWrapper>
        </Styled.ContentCol>
      </ContentContainer>
    </Styled.Container>
  )
}

export default GyoumuDataKanri
