import React from 'react'
import { Table, Row, Column, THead, TBody } from './elements'
import Title from './../Title/Title'
import Text from './../Text/Text'
import ButtonType4 from './../ButtonType4/ButtonType4'
import { String } from './../../constants'

// constants
const TITLE_COLOR = 'var(--color-1)'

// main
const TableGyoumuType1 = ({ data = [], onClick = () => {} }) => {
  const handleItem = id => {
    onClick(id)
  }

  return (
    <Table>
      <THead>
        <Row>
          <Column>
            <Title style={{ color: TITLE_COLOR }}>{String.sentaku}</Title>
          </Column>
          <Column>
            <Title style={{ color: TITLE_COLOR }}>{String.nendo}</Title>
          </Column>
          <Column>
            <Title style={{ color: TITLE_COLOR }}>{String.gyoumei}</Title>
          </Column>
        </Row>
      </THead>

      <TBody>
        {data.map((item, _) => (
          <Row key={_.toString()}>
            <Column>
              <ButtonType4
                title={String.sentaku}
                onClick={() => handleItem(item.NO_GYOUMU)}
              />
            </Column>
            <Column>
              <Text>{item.NENDO}</Text>
            </Column>
            <Column>
              <Text>{item.NAME_GYOUMU}</Text>
            </Column>
          </Row>
        ))}
      </TBody>
    </Table>
  )
}

export default TableGyoumuType1
