import React, { useState } from 'react'
import { String, NamePages } from '../../constants'
import NyuuryokuGamen1 from './../NyuuryokuGamen1/NyuuryokuGamen1'
import NyuuryokuGamen2 from './../NyuuryokuGamen2/NyuuryokuGamen2'
import GenkyouShashin from './../GenkyouShashin/GenkyouShashin'
import { HeaderBarType2 } from './../../components'
import { useHistory } from 'react-router-dom'

// constants

// main
const MenuRouterTypeFlagCalvert1 = () => {
  // constants
  const [currentNamePage, setCurrentNamePage] = useState(
    NamePages.NyuuryokuGamen1
  )
  const history = useHistory()
  const SIDE_BAR_DATA = [
    {
      title: String.konkai_tenken,
      child: [
        {
          title: String.shashinchou,
          onClick: () => {
            history.push(NamePages.Shashinchou)
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
      {currentNamePage === NamePages.NyuuryokuGamen1 && <NyuuryokuGamen1 />}
      {currentNamePage === NamePages.NyuuryokuGamen2 && <NyuuryokuGamen2 />}
      {currentNamePage === NamePages.GenkyouShashin && <GenkyouShashin />}
    </HeaderBarType2>
  )
}

export default MenuRouterTypeFlagCalvert1
