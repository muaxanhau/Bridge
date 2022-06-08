import React, { useState, useEffect } from 'react'
import { Table, THead, TBody, Row, Column } from './elements'
import Title from './../Title/Title'
import Text from './../Text/Text'
import { String } from './../../constants'

// constants
const TITLE_COLOR = 'var(--color-1)'

// main
const TableGyoumuType2 = ({ data = [], onChangeItemSelected = id => {} }) => {
  const [indexSelected, setIndexSelected] = useState(-1)
  const [idSelected, setIdSelected] = useState(undefined)

  const handleItem = (index, id) => {
    setIndexSelected(prev => (prev = index))
    setIdSelected(prev => (prev = id))
  }

  useEffect(() => {
    onChangeItemSelected(idSelected)
  }, [idSelected])

  return (
    <Table>
      <THead>
        <Row>
          <Column>
            <Title style={{ color: TITLE_COLOR }}>{String.nendo}</Title>
          </Column>
          <Column>
            <Title style={{ color: TITLE_COLOR }}>{String.gyoumei}</Title>
          </Column>
        </Row>
      </THead>

      <TBody>
        {data.map((item, index) => (
          <Row
            key={index.toString()}
            onClick={() => handleItem(index, item.NO_GYOUMU)}
            selected={indexSelected === index}
          >
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

export default TableGyoumuType2
