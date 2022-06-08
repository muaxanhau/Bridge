import React, { useReducer, useEffect } from 'react'
import { String, NamePages, SQLite } from '../../constants'
import { ButtonContainer } from './elements'
import {
  Styled,
  ButtonType1,
  HeaderBarType1,
  PopupGyoumuList
} from '../../components'
import { useHistory } from 'react-router-dom'
import { useQuery } from './../../utils/hooks'

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_POPUP_GYOUMU_LIST':
      return {
        ...state,
        showPopupGyoumuList: true
      }
    case 'HIDE_POPUP_GYOUMU_LIST':
      return {
        ...state,
        showPopupGyoumuList: false
      }
    case 'SET_DATA_LIST_GYOUMU':
      return {
        ...state,
        dataListGyoumu: Array.isArray(action.payload)
          ? action.payload
          : state.dataListGyoumu
      }
    default:
      return state
  }
}

// main
const Menu = () => {
  // state
  const [state, dispatch] = useReducer(reducer, {
    showPopupGyoumuList: false,
    dataListGyoumu: []
  })

  // constants
  const history = useHistory()

  // query - mutation
  const queryMGyoumu = useQuery({
    queryString: SQLite.QueryString.MGyoumu.select.all.orderBy.NendoDesc.pure,
    onSuccess: data => {
      dispatch({ type: 'SET_DATA_LIST_GYOUMU', payload: data })
    }
  })

  // handles
  const handleGyoumuDataKanri = () => {
    history.push(NamePages.GyoumuDataKanri)
  }
  const handleTenkenGyoumu = () => {
    handleShowPopupGyoumuList()
  }
  const handleItemTenkenGyoumu = id => {
    history.push(NamePages.TenkenGyoumuMap, { NO_GYOUMU: id })
  }
  const handleShowPopupGyoumuList = () => {
    dispatch({ type: 'SHOW_POPUP_GYOUMU_LIST' })
  }
  const handleHidePopupGyoumuList = () => {
    dispatch({ type: 'HIDE_POPUP_GYOUMU_LIST' })
  }

  // effects

  //render
  return (
    <>
      <PopupGyoumuList
        hidden={!state.showPopupGyoumuList}
        data={state.dataListGyoumu}
        onClick={handleItemTenkenGyoumu}
        onClickBackground={handleHidePopupGyoumuList}
      />

      <Styled.Container>
        <HeaderBarType1 title={String.menu} canGoBack={false} />

        <ButtonContainer>
          <ButtonType1
            color='green'
            title={String.gyoumu_data_kanri}
            onClick={handleGyoumuDataKanri}
          />
          <ButtonType1
            color='green'
            title={String.tenken_gyoumu}
            onClick={handleTenkenGyoumu}
          />
          <ButtonType1
            color='green'
            title={String.download_map}
            // onClick={() => history.push(NamePages.MenuRouterTypeFlagCalvert2)}
            onClick={() => history.push(NamePages.Test)}
          />
        </ButtonContainer>
      </Styled.Container>
    </>
  )
}

export default Menu
