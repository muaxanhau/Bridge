import React from 'react'
import Shashinchou from '../Shashinchou/Shashinchou'
import { String } from '../../constants'
import { useHistory, useLocation } from 'react-router-dom'
import { HeaderBarType1 } from './../../components'

const ShashinchouWithBarType1 = () => {
  const location = useLocation()
  const { NO_GYOUMU, BRIDGE_ID } = location.state

  return (
    <>
      <HeaderBarType1 title={String.shashinchou} />
      <Shashinchou NO_GYOUMU={NO_GYOUMU} BRIDGE_ID={BRIDGE_ID} />
    </>
  )
}

export default ShashinchouWithBarType1
