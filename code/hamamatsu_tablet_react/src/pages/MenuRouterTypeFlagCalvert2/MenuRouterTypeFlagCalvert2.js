import React, { useState } from 'react'
import { String, NamePages } from '../../constants'
import NyuuryokuGamen1Mizobashi from './../NyuuryokuGamen1Mizobashi/NyuuryokuGamen1Mizobashi'
import NyuuryokuGamen2Mizobashi from './../NyuuryokuGamen2Mizobashi/NyuuryokuGamen2Mizobashi'
import GenkyouShashin from './../GenkyouShashin/GenkyouShashin'
import { HeaderBarType2 } from './../../components'
import { useHistory } from 'react-router-dom'

// main
const MenuRouterTypeFlagCalvert2 = () => {
  // constants
  const [currentNamePage, setCurrentNamePage] = useState(
    NamePages.NyuuryokuGamen1Mizobashi
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
          title: String.sono_konkai_tenken + 1 + ' (' + String.mizohashi + ')',
          onClick: () => {
            setCurrentNamePage(
              prev => (prev = NamePages.NyuuryokuGamen1Mizobashi)
            )
          }
        },
        {
          title: String.sono_konkai_tenken + 2 + ' (' + String.mizohashi + ')',
          onClick: () => {
            setCurrentNamePage(
              prev => (prev = NamePages.NyuuryokuGamen2Mizobashi)
            )
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
        {
          title: String.sono_konkai_tenken + 1 + ' (' + String.mizohashi + ')',
          onClick: () => {}
        },
        {
          title: String.sono_konkai_tenken + 2 + ' (' + String.mizohashi + ')',
          onClick: () => {}
        }
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
      {currentNamePage === NamePages.NyuuryokuGamen1Mizobashi && (
        <NyuuryokuGamen1Mizobashi />
      )}
      {currentNamePage === NamePages.NyuuryokuGamen2Mizobashi && (
        <NyuuryokuGamen2Mizobashi />
      )}
      {currentNamePage === NamePages.GenkyouShashin && <GenkyouShashin />}
    </HeaderBarType2>
  )
}

export default MenuRouterTypeFlagCalvert2
