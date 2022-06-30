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
import { reducer } from './reducer'

// constants
const ICON_SIZE = '30px'

// main
const TableListBridge = ({
  data = [],
  flgTablet = 0,
  onChangeSelectedBridge = id => {}
}) => {
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
                tested={
                  flgTablet === 0
                    ? item.codeShindanFlgTablet0
                    : item.codeShindanFlgTablet1
                }
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
                  <Text>
                    {flgTablet === 0
                      ? item.nameShindanFlgTablet0
                      : item.nameShindanFlgTablet1}
                  </Text>
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
