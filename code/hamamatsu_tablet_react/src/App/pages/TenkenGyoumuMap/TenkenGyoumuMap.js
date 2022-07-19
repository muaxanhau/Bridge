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
import { useMapOffline, useMutation, useQuery } from './../../utils/hooks'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { getIconMaker, convertCoordinateToDecimal } from './../../utils/commons'
import { Geolocation } from '@awesome-cordova-plugins/geolocation'
import { groupArrayOfObjects } from './../../utils/commons'
import { reducer } from './reducer'

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

// main
const TenkenGyoumuMap = () => {
  // state
  const [state, dispatch] = useReducer(reducer, {
    headerName: '',
    dataListBridgeRoot: [],
    dataListBridgeFiltered: [],
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
        .by.NoGyoumu.pure,
    params: [NO_GYOUMU],
    onSuccess: data => {
      dispatch({ type: 'SET_DATA_LIST_BRIDGE_ROOT', payload: data })
    }
  })

  const mutationFlgCalvert = useMutation({
    queryString:
      SQLite.QueryString.Bridge.select.FlgCalvert.by.NoGyoumu_BridgeID.pure
  })

  // handles
  const handleOnChangeHanrei = (listShindanChecked, flgTablet) => {
    dispatch({
      type: 'SET_DATA_LIST_SHINDAN_CHECKED',
      payload: listShindanChecked
    })
    dispatch({ type: 'SET_FLG_TABLET', payload: flgTablet })
  }
  const handleOnChangeSelectedBridge = id => {
    const bridge = state.dataListBridgeRoot.filter(
      item => item.BRIDGE_ID === id
    )[0]

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
  useEffect(() => {
    const listBridgeGrouped = groupArrayOfObjects(
      state.dataListBridgeRoot,
      'CODE_BRIDGE'
    )
    const listBridgeFiltered = Object.keys(listBridgeGrouped).map(key => ({
      CODE_BRIDGE: key,
      BRIDGE_ID: key,
      IDO_START_TENKEN: listBridgeGrouped[key][0]?.IDO_START_TENKEN,
      KEIDO_START_TENKEN: listBridgeGrouped[key][0]?.KEIDO_START_TENKEN,
      NAME_SHISETSU: listBridgeGrouped[key][0]?.NAME_SHISETSU,
      codeShindanFlgTablet0:
        listBridgeGrouped[key].filter(item => item.FLG_TABLET === 0)[0]
          ?.CODE_SHINDAN || 0,
      codeShindanFlgTablet1:
        listBridgeGrouped[key].filter(item => item.FLG_TABLET === 1)[0]
          ?.CODE_SHINDAN || 0,
      nameShindanFlgTablet0:
        listBridgeGrouped[key].filter(item => item.FLG_TABLET === 0)[0]
          ?.NAME_SHINDAN || String.sue_tenken,
      nameShindanFlgTablet1:
        listBridgeGrouped[key].filter(item => item.FLG_TABLET === 1)[0]
          ?.NAME_SHINDAN || String.sue_tenken
    }))

    dispatch({
      type: 'SET_DATA_LIST_BRIDGE_FILTERED',
      payload: listBridgeFiltered
    })
  }, [state.dataListBridgeRoot])

  // render
  return (
    <Styled.Container>
      <HeaderBarType1 title={state.headerName}>
        <ButtonType2 title={String.genzaichi} onClick={handleGenzaichi} />
      </HeaderBarType1>

      <TableHanrei onChange={handleOnChangeHanrei} />

      <TableListBridge
        data={state.dataListBridgeFiltered}
        flgTablet={state.flgTablet}
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

        {state.dataListBridgeFiltered.map((item, _) => {
          if (
            !state.dataListShindanChecked.includes(
              state.flgTablet === 0
                ? item.codeShindanFlgTablet0
                : item.codeShindanFlgTablet1
            )
          ) {
            return null
          }
          return (
            <Marker
              key={_.toString()}
              position={[
                convertCoordinateToDecimal(item.IDO_START_TENKEN),
                convertCoordinateToDecimal(item.KEIDO_START_TENKEN)
              ]}
              icon={getIconMaker(
                (state.flgTablet === 0
                  ? item.codeShindanFlgTablet0
                  : item.codeShindanFlgTablet1
                ).toString()
              )}
              eventHandlers={{
                click: () => {
                  mutationFlgCalvert
                    .execute([NO_GYOUMU, item.BRIDGE_ID])
                    .then(data => {
                      const FlgCalvert = data[0]?.FLG_CALVERT
                      history.push(
                        FlgCalvert === null
                          ? NamePages.ShashinchouWithBarType1
                          : FlgCalvert === 0
                          ? NamePages.MenuRouterTypeFlagCalvert1
                          : NamePages.MenuRouterTypeFlagCalvert2,
                        {
                          NO_GYOUMU,
                          BRIDGE_ID: item.BRIDGE_ID
                        }
                      )
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
