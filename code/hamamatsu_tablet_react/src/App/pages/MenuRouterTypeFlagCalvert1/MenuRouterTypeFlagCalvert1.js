import React, { useState } from 'react'
import { String, NamePages } from '../../constants'
import Shashinchou from '../Shashinchou/Shashinchou'
import NyuuryokuGamen1 from './../NyuuryokuGamen1/NyuuryokuGamen1'
import NyuuryokuGamen2 from './../NyuuryokuGamen2/NyuuryokuGamen2'
import GenkyouShashin from './../GenkyouShashin/GenkyouShashin'
import { HeaderBarType2 } from './../../components'
import { useHistory, useLocation } from 'react-router-dom'

// main
const MenuRouterTypeFlagCalvert1 = () => {
  // constants
  const [currentNamePage, setCurrentNamePage] = useState(NamePages.Shashinchou)
  const history = useHistory()
  const location = useLocation()
  const { NO_GYOUMU, BRIDGE_ID } = location.state
  const SIDE_BAR_DATA = [
    {
      title: String.konkai_tenken,
      child: [
        {
          title: String.shashinchou,
          onClick: () => {
            setCurrentNamePage(prev => (prev = NamePages.Shashinchou))
          }
        },
        {
          title: String.sono_konkai_tenken + 1,
          onClick: () => {
            setCurrentNamePage(prev => (prev = NamePages.NyuuryokuGamen1))
          }
        },
        {
          title: String.sono_konkai_tenken + 2,
          onClick: () => {
            setCurrentNamePage(prev => (prev = NamePages.NyuuryokuGamen2))
          }
        },
        {
          title: String.genkyoushashin,
          onClick: () => {
            setCurrentNamePage(prev => (prev = NamePages.GenkyouShashin))
          }
        }
      ]
    },
    {
      title: String.zenkai_tenken,
      child: [
        { title: String.sono_konkai_tenken + 1, onClick: () => {} },
        { title: String.sono_konkai_tenken + 2, onClick: () => {} }
      ]
    }
  ]

  // handles

  // effects

  // render
  return (
    <HeaderBarType2
      title={NamePages.Japanese[currentNamePage]}
      data={SIDE_BAR_DATA}
    >
      {currentNamePage === NamePages.Shashinchou && (
        <Shashinchou NO_GYOUMU={NO_GYOUMU} BRIDGE_ID={BRIDGE_ID} />
      )}
      {currentNamePage === NamePages.NyuuryokuGamen1 && (
        <NyuuryokuGamen1 NO_GYOUMU={NO_GYOUMU} BRIDGE_ID={BRIDGE_ID} />
      )}
      {currentNamePage === NamePages.NyuuryokuGamen2 && (
        <NyuuryokuGamen2 NO_GYOUMU={NO_GYOUMU} BRIDGE_ID={BRIDGE_ID} />
      )}
      {currentNamePage === NamePages.GenkyouShashin && (
        <GenkyouShashin NO_GYOUMU={NO_GYOUMU} BRIDGE_ID={BRIDGE_ID} />
      )}
    </HeaderBarType2>
  )
}

export default MenuRouterTypeFlagCalvert1
