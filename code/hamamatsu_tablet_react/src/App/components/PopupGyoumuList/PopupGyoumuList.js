import React from 'react'
import PopupLayout from '../PopupLayout/PopupLayout'
import Title from '../Title/Title'
import TableGyoumuType1 from '../TableGyoumuType1/TableGyoumuType1'
import { PopupContainer, TableContainer } from './elements'
import { String } from './../../constants'

const PopupGyoumuList = ({
  hidden = false,
  data = [],
  onClick = id => {},
  onClickBackground = () => {}
}) => {
  if (hidden) {
    return null
  }

  return (
    <PopupLayout onClickBackground={onClickBackground} enableScroll={false}>
      <PopupContainer>
        <Title>{String.gyoumu_list}</Title>

        <TableContainer>
          <TableGyoumuType1 data={data} onClick={onClick} />
        </TableContainer>
      </PopupContainer>
    </PopupLayout>
  )
}

export default PopupGyoumuList
