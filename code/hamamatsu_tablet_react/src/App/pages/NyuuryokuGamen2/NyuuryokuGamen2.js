import React, { useReducer, useEffect } from 'react'
import { String, Images, SQLite } from '../../constants'
import { ContentGrid } from './elements'
import {
  Styled,
  Text,
  ButtonType1,
  InputText,
  InputSelection,
  InputTextArea,
  PopupPhoto
} from './../../components'
import { IonContent } from '@ionic/react'
import { useQuery, usePhotoGallery, useMutation } from '../../utils/hooks'
import {
  convertDate,
  getBase64FromImage,
  getDateNowString
} from '../../utils/commons'
import { reducer } from './reducer'

// main
const NyuuryokuGamen2 = ({ NO_GYOUMU, BRIDGE_ID }) => {
  // state
  const [state, dispatch] = useReducer(reducer, {
    lblKyouryoumei: '',
    lblRosenmei: '',
    lblKanrishamei: '',
    lblTenkenin: '',
    lblTenkenNengappi: '',

    dataListShindan: [],
    dataListGazouTmp: [],

    showPhotoPopup: false,
    image: null
  })

  // constants
  const { photos, getGallery, takePhoto } = usePhotoGallery()

  // query - mutation
  const queryHeader = useQuery({
    queryString:
      SQLite.QueryString.select
        .NameShisetsuTenken_NameRosen_NameSoshiki_NameTenkensha_NengappiTenken
        .by.NoGyoumu_BridgeID.pure,
    params: [NO_GYOUMU, BRIDGE_ID],
    onSuccess: data =>
      dispatch({
        type: 'SET_GROUP_HEADER',
        payload: {
          lblKyouryoumei: data[0]?.NAME_SHISETSU_TENKEN,
          lblRosenmei: data[0]?.NAME_ROSEN,
          lblKanrishamei: data[0]?.NAME_SOSHIKI,
          lblTenkenin: data[0]?.NAME_TENKENSHA,
          lblTenkenNengappi: convertDate(data[0]?.NENGAPPI_TENKEN)
        }
      })
  })
  const queryShindan = useQuery({
    queryString:
      SQLite.QueryString.MShindan.select.CodeShindan_NameShindan.pure,
    onSuccess: data =>
      dispatch({
        type: 'SET_DATA_LIST_SHINDAN',
        payload: data.map(item => [item.CODE_SHINDAN, item.NAME_SHINDAN])
      })
  })
  const queryGazou = useQuery({
    queryString:
      SQLite.QueryString.TenkenhyoGazou.select
        .GazouID_FullPath_NameBuzai_ShindanTenken_NameFile_Bikou.by
        .NoGyoumu_BridgeID_FlgTablet.with.GazouIDNoEqual0_FlgDamageEqual0,
    params: [NO_GYOUMU, BRIDGE_ID, 1],
    onSuccess: data =>
      dispatch({ type: 'SET_DATA_LIST_GAZOU_TMP', payload: data })
  })

  const mutationUpdateGazou = useMutation({
    queryString:
      SQLite.QueryString.TenkenhyoGazou.insert_update
        .NoGyoumu_BridgeID_FlgTablet_GazouID_Bikou_FullPath_NameBuzai_NameFile_ShindanTenken
        .by.NoGyoumu_BridgeID_FlgTablet_GazouID.pure
  })

  // handles
  const handleShowPhotoPopup = image => {
    dispatch({ type: 'SHOW_PHOTO_POPUP', payload: image })
  }
  const handleHidePhotoPopup = () => {
    dispatch({ type: 'HIDE_PHOTO_POPUP' })
  }
  const handleGyouTsuika = () => {
    dispatch({
      type: 'SET_DATA_LIST_GAZOU_TMP',
      payload: [
        ...state.dataListGazouTmp,
        {
          BIKOU: '',
          FULL_PATH: null,
          GAZOU_ID:
            Math.max(
              ...state.dataListGazouTmp.map(item =>
                typeof item.GAZOU_ID === 'number' ? item.GAZOU_ID : 0
              )
            ) + 1,
          NAME_BUZAI: '',
          NAME_FILE: '',
          SHINDAN_TENKEN: 0
        }
      ]
    })
  }
  const handleKoushin = async () => {
    console.log(state.dataListGazouTmp)

    for (let i = 0; i < state.dataListGazouTmp.length; i++) {
      const item = state.dataListGazouTmp[i]
      console.log(item)

      await mutationUpdateGazou.execute([
        NO_GYOUMU,
        BRIDGE_ID,
        1,
        item.GAZOU_ID,
        item.BIKOU,
        item.FULL_PATH,
        item.NAME_BUZAI,
        item.NAME_FILE,
        item.SHINDAN_TENKEN,
        item.BIKOU,
        item.FULL_PATH,
        item.NAME_BUZAI,
        item.NAME_FILE,
        item.SHINDAN_TENKEN
      ])
    }
  }

  // effects

  // render
  return (
    <>
      <PopupPhoto
        hidden={!state.showPhotoPopup}
        onClickBackground={handleHidePhotoPopup}
        image={state.image}
      />

      <Styled.Container style={{ padding: '0 var(--padding-1)' }}>
        <IonContent scrollY={true}>
          <Styled.Spacing1 />

          <Styled.ContentCol style={{ gap: 'var(--gap-2)' }}>
            <Styled.Table>
              <Styled.TBody>
                <Styled.Row>
                  <Styled.ColumnTitle rowSpan={2}>
                    <Text>{String.kyouryoumei}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column rowSpan={2}>
                    <Text>{state.lblKyouryoumei}</Text>
                  </Styled.Column>

                  <Styled.ColumnTitle>
                    <Text>{String.rosenmei}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblRosenmei}</Text>
                  </Styled.Column>

                  <Styled.ColumnTitle>
                    <Text>{String.tenkenin}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblTenkenin}</Text>
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle rowSpan={2}>
                    <Text>{String.kanrishamei}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblKanrishamei}</Text>
                  </Styled.Column>
                  <Styled.ColumnTitle rowSpan={2}>
                    <Text>{String.tenken_nengappi}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblTenkenNengappi}</Text>
                  </Styled.Column>
                </Styled.Row>
              </Styled.TBody>
            </Styled.Table>

            <ContentGrid>
              {state.dataListGazouTmp.map((item, _) => (
                <Styled.Table key={_.toString()}>
                  <Styled.TBody>
                    <Styled.Row>
                      <Styled.Column>
                        <InputText
                          disableBorder
                          defaultValue={item.NAME_BUZAI}
                          onChange={e => {
                            const newGazou = [...state.dataListGazouTmp].map(
                              gazou => {
                                if (item.GAZOU_ID !== gazou.GAZOU_ID)
                                  return gazou

                                return {
                                  ...gazou,
                                  NAME_BUZAI: e.target.value
                                }
                              }
                            )

                            dispatch({
                              type: 'SET_DATA_LIST_GAZOU_TMP',
                              payload: newGazou
                            })
                          }}
                        />
                      </Styled.Column>
                      <Styled.ColumnTitle disableMinWidth>
                        <Text>{String.hante_kubun}</Text>
                      </Styled.ColumnTitle>
                      <Styled.Column disableMinWidth>
                        <InputSelection
                          data={state.dataListShindan}
                          defaultValue={item.SHINDAN_TENKEN}
                          onChange={e => {
                            const newGazou = [...state.dataListGazouTmp].map(
                              gazou => {
                                if (item.GAZOU_ID !== gazou.GAZOU_ID)
                                  return gazou

                                return {
                                  ...gazou,
                                  SHINDAN_TENKEN: parseInt(e.target.value)
                                }
                              }
                            )

                            dispatch({
                              type: 'SET_DATA_LIST_GAZOU_TMP',
                              payload: newGazou
                            })
                          }}
                        />
                      </Styled.Column>
                    </Styled.Row>

                    <Styled.Row>
                      <Styled.Column
                        style={{ textAlign: 'center', width: '65%' }}
                      >
                        <Styled.Image
                          src={
                            item.FULL_PATH
                              ? String.base64RootImage + item.FULL_PATH
                              : Images.no_image
                          }
                          width='100%'
                          onClick={() =>
                            item.FULL_PATH &&
                            handleShowPhotoPopup(
                              String.base64RootImage + item.FULL_PATH
                            )
                          }
                        />
                      </Styled.Column>
                      <Styled.Column colSpan={2} style={{ width: '35%' }}>
                        <Styled.ContentCol>
                          <ButtonType1
                            title={String.fairu_sentaku}
                            size='small'
                            onClick={() =>
                              getGallery({
                                onSuccess: data => {
                                  const { imageUrl } = data

                                  getBase64FromImage(imageUrl, base64Img => {
                                    const newGazou = [
                                      ...state.dataListGazouTmp
                                    ].map(gazou => {
                                      if (item.GAZOU_ID !== gazou.GAZOU_ID)
                                        return gazou

                                      return {
                                        ...gazou,
                                        FULL_PATH: base64Img
                                      }
                                    })

                                    dispatch({
                                      type: 'SET_DATA_LIST_GAZOU_TMP',
                                      payload: newGazou
                                    })
                                  })
                                }
                              })
                            }
                          />
                          <ButtonType1
                            title={String.kamera_kidou}
                            size='small'
                            onClick={() =>
                              takePhoto({
                                onSuccess: data => {
                                  const { imageUrl } = data

                                  getBase64FromImage(imageUrl, base64Img => {
                                    const newGazou = [
                                      ...state.dataListGazouTmp
                                    ].map(gazou => {
                                      if (item.GAZOU_ID !== gazou.GAZOU_ID)
                                        return gazou

                                      return {
                                        ...gazou,
                                        FULL_PATH: base64Img
                                      }
                                    })

                                    dispatch({
                                      type: 'SET_DATA_LIST_GAZOU_TMP',
                                      payload: newGazou
                                    })
                                  })
                                }
                              })
                            }
                          />
                        </Styled.ContentCol>
                      </Styled.Column>
                    </Styled.Row>

                    <Styled.Row>
                      <Styled.Column colSpan={3}>
                        <InputTextArea
                          rows={2}
                          defaultValue={item.BIKOU}
                          disableBorder
                          style={{ width: '100%' }}
                          onChange={e => {
                            const newGazou = [...state.dataListGazouTmp].map(
                              gazou => {
                                if (item.GAZOU_ID !== gazou.GAZOU_ID)
                                  return gazou

                                return {
                                  ...gazou,
                                  BIKOU: e.target.value
                                }
                              }
                            )

                            dispatch({
                              type: 'SET_DATA_LIST_GAZOU_TMP',
                              payload: newGazou
                            })
                          }}
                        />
                      </Styled.Column>
                    </Styled.Row>
                  </Styled.TBody>
                </Styled.Table>
              ))}
            </ContentGrid>

            <Styled.ContentRow
              style={{
                justifyContent: 'center'
              }}
            >
              <ButtonType1
                title={String.gyou_tsuika}
                style={{ width: 'var(--button-width)' }}
                onClick={handleGyouTsuika}
              />
              <ButtonType1
                title={String.koushin}
                style={{ width: 'var(--button-width)' }}
                onClick={handleKoushin}
              />
            </Styled.ContentRow>
          </Styled.ContentCol>

          <Styled.Spacing1 />
        </IonContent>
      </Styled.Container>
    </>
  )
}

export default NyuuryokuGamen2
