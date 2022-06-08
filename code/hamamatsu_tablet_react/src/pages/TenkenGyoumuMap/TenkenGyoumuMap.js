import React, { useEffect, useReducer } from 'react'

import { String, NamePages, SQLite } from './../../constants'
import {} from './elements'
import {
  Styled,
  HeaderBarType1,
  ButtonType2,
  TableHanrei,
  TableListBridge
} from './../../components'
import { useHistory, useLocation } from 'react-router-dom'
import { useMapOffline, useQuery } from './../../utils/hooks'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { getIconMaker, convertCoordinateToDecimal } from './../../utils/commons'
import { Geolocation } from '@awesome-cordova-plugins/geolocation'

// constants
const DEFAULT_CENTER = [34.853611111111114, 137.82083333333333]
const DEFAULT_ZOOM = 17

// components
const MapFly = ({ lat, lng }) => {
  const map = useMap()

  useEffect(() => {
    if (!lat || !lng) {
      return
    }

    map.flyTo([lat, lng], DEFAULT_ZOOM)
  }, [lat, lng])

  return null
}

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_HEADER_NAME':
      return {
        ...state,
        headerName: action.payload
      }
    case 'SET_DATA_LIST_BRIDGE':
      return {
        ...state,
        dataListBridge: Array.isArray(action.payload)
          ? action.payload
          : state.dataListBridge
      }
    case 'SET_DATA_LIST_SHINDAN_CHECKED':
      return {
        ...state,
        dataListShindanChecked: Array.isArray(action.payload)
          ? action.payload
          : state.dataListShindanChecked
      }
    case 'SET_FLG_TABLET':
      return {
        ...state,
        flgTablet: action.payload
      }
    case 'SET_LAT_LNG':
      return {
        ...state,
        currentLat: action.payload.currentLat || state.currentLat,
        currentLng: action.payload.currentLng || state.currentLng
      }
    default:
      return state
  }
}

// main
const TenkenGyoumuMap = () => {
  // state
  const [state, dispatch] = useReducer(reducer, {
    headerName: '',
    dataListBridge: [],
    dataListShindanChecked: [],
    flgTablet: 1,
    currentLat: undefined,
    currentLng: undefined
  })

  // constants
  useMapOffline()
  const history = useHistory()
  const location = useLocation()
  const { NO_GYOUMU } = location.state

  // query - mutation
  const queryNameGyoumu = useQuery({
    queryString: SQLite.QueryString.MGyoumu.select.NameGyoumu.by.NoGyoumu.pure,
    params: [NO_GYOUMU],
    onSuccess: data => {
      data.length &&
        dispatch({ type: 'SET_HEADER_NAME', payload: data[0].NAME_GYOUMU })
    }
  })
  const queryListBridge = useQuery({
    queryString:
      SQLite.QueryString.select
        .CodeBridge_BridgeID_NameShisetsu_IdoStartTenken_KeidoStartTenken_FlgCalvert_CodeShindan_NameShindan
        .by.NoGyoumu,
    params: [NO_GYOUMU],
    onSuccess: data => {
      dispatch({ type: 'SET_DATA_LIST_BRIDGE', payload: data })
    }
  })

  // handles
  const handleOnChangeHanrei = (listShindanChecked, flgTablet) => {
    dispatch({
      type: 'SET_DATA_LIST_SHINDAN_CHECKED',
      payload: listShindanChecked
    })
    dispatch({ type: 'SET_FLG_TABLET', payload: flgTablet })
  }
  const handleOnChangeListBridge = listBridge => {
    dispatch({
      type: 'SET_DATA_LIST_BRIDGE',
      payload: listBridge
    })
  }
  const handleOnChangeSelectedBridge = id => {
    const bridge = state.dataListBridge.filter(item => item.BRIDGE_ID === id)[0]

    dispatch({
      type: 'SET_LAT_LNG',
      payload: {
        currentLat: convertCoordinateToDecimal(bridge.IDO_START_TENKEN),
        currentLng: convertCoordinateToDecimal(bridge.KEIDO_START_TENKEN)
      }
    })
  }
  const handleGenzaichi = () => {
    Geolocation.getCurrentPosition().then(res => {
      console.log(res)
    })
  }

  // effects

  // render
  return (
    <Styled.Container>
      <HeaderBarType1 title={state.headerName}>
        <ButtonType2 title={String.genzaichi} onClick={handleGenzaichi} />
      </HeaderBarType1>

      <TableHanrei onChange={handleOnChangeHanrei} />

      <TableListBridge
        data={state.dataListBridge.filter(
          item => item.FLG_TABLET === parseInt(state.flgTablet)
        )}
        onChangeListBridge={handleOnChangeListBridge}
        onChangeSelectedBridge={handleOnChangeSelectedBridge}
      />
      <MapContainer
        center={DEFAULT_CENTER}
        zoom={DEFAULT_ZOOM}
        scrollWheelZoom={false}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <MapFly lat={state.currentLat} lng={state.currentLng} />

        {state.dataListBridge.map((item, _) => {
          if (item.FLG_TABLET !== parseInt(state.flgTablet)) {
            return null
          }
          if (!state.dataListShindanChecked.includes(item.CODE_SHINDAN)) {
            return null
          }
          return (
            <Marker
              key={_.toString()}
              position={[
                convertCoordinateToDecimal(item.IDO_START_TENKEN),
                convertCoordinateToDecimal(item.KEIDO_START_TENKEN)
              ]}
              icon={getIconMaker(item.CODE_SHINDAN)}
              eventHandlers={{
                click: () => {
                  history.push(NamePages.Shashinchou, {
                    NO_GYOUMU,
                    BRIDGE_ID: item.BRIDGE_ID
                  })
                }
              }}
            />
          )
        })}
      </MapContainer>
    </Styled.Container>
  )
}

export default TenkenGyoumuMap
