import React, { useEffect, useReducer } from 'react'
import { String } from './../../constants'
import {
  Container,
  TableContainer,
  Table,
  TBody,
  Row,
  ColumnTitle,
  Column
} from './elements'
import ButtonIcon from './../ButtonIcon/ButtonIcon'
import Text from '../Text/Text'
import { caretForwardOutline, chevronBackOutline } from 'ionicons/icons'

// constants
const ICON_SIZE = '30px'

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA_LIST_BRIDGE':
      return {
        ...state,
        dataListBridge: Array.isArray(action.payload)
          ? action.payload
          : state.dataListBridge
      }
    case 'MINIMIZE':
      return {
        ...state,
        isMinimize: true
      }
    case 'MAXIMIZE':
      return {
        ...state,
        isMinimize: false
      }
    case 'SET_INDEX':
      return {
        ...state,
        index: action.payload
      }
    default:
      return state
  }
}

// main
const TableListBridge = ({ data = [], onChangeSelectedBridge = id => {} }) => {
  // state
  const [state, dispatch] = useReducer(reducer, {
    isMinimize: false,
    index: undefined
  })

  // constants

  // handles
  const handleToggleMinimize = () => {
    dispatch({ type: state.isMinimize ? 'MAXIMIZE' : 'MINIMIZE' })
  }
  const handleItem = (index, id) => {
    dispatch({ type: 'SET_INDEX', payload: index })
    onChangeSelectedBridge(id)
  }

  // effect
  useEffect(() => {
    dispatch({ type: 'SET_INDEX', payload: undefined })
  }, [JSON.stringify(data)])

  // render
  return (
    <Container
      style={{ paddingLeft: ICON_SIZE }}
      show={!state.isMinimize}
      minWidth={ICON_SIZE}
    >
      <ButtonIcon
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          zIndex: 1
        }}
        size={ICON_SIZE}
        icon={state.isMinimize ? chevronBackOutline : caretForwardOutline}
        color='var(--color-6)'
        onClick={handleToggleMinimize}
      />

      <TableContainer>
        <Table>
          <TBody>
            <Row>
              <ColumnTitle>
                <Text>{String.kanri_bangou}</Text>
              </ColumnTitle>
              <ColumnTitle>
                <Text>{String.kyouryoumei}</Text>
              </ColumnTitle>
              <ColumnTitle>
                <Text>{String.kenzendo}</Text>
              </ColumnTitle>
            </Row>

            {data.map((item, index) => (
              <Row
                key={index.toString()}
                selected={index === state.index}
                tested={item.CODE_SHINDAN}
                onClick={() => {
                  handleItem(index, item.BRIDGE_ID)
                }}
              >
                <Column>
                  <Text>{item.CODE_BRIDGE}</Text>
                </Column>
                <Column>
                  <Text>{item.NAME_SHISETSU}</Text>
                </Column>
                <Column>
                  <Text>{item.NAME_SHINDAN || String.sue_tenken}</Text>
                </Column>
              </Row>
            ))}
          </TBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default TableListBridge
