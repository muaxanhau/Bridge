import React, { useReducer, useEffect } from 'react'
import { String, Images, DummyData, SQLite } from '../../constants'
import { convertDate } from './../../utils/commons'
import { useMutation, useQuery } from './../../utils/hooks'
import { MainContent, ImageInstance } from './elements'
import {
  Styled,
  HeaderBarType1,
  Title,
  Text,
  ButtonType4,
  ButtonType1,
  PopupDatePicker,
  PopupZenkeiShashin,
  PopupSentaku,
  PopupPhoto,
  PopupLayout,
  PopupSonshouShashin,
  PopupTenkenYouryouHyouji,
  InputCheckBox,
  PopupTakePhoto
} from './../../components'
import { useHistory, useLocation } from 'react-router-dom'
import { usePhotoGallery } from './../../utils/hooks'
import {
  getDateNowString,
  getBase64FromImage,
  getImageFromBase64,
  getUUID
} from './../../utils/commons'

// constants
const IMAGE_SPACE_BETWEEN = '10vw'
const TITLE_MARGIN_LEFT = '10vw'
const IMAGE_WIDTH_CONTAINER = `calc(100% - 3*${TITLE_MARGIN_LEFT})`

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_GROUP_HEADER':
      return {
        ...state,
        lblKyouryoumei: action.payload.lblKyouryoumei || state.lblKyouryoumei,
        lblRosenmei: action.payload.lblRosenmei || state.lblRosenmei,
        lblKanrishamei: action.payload.lblKanrishamei || state.lblKanrishamei,
        lblHeader: action.payload.lblHeader || state.lblHeader,
        selectedDate: action.payload.selectedDate || state.lblHeader
      }
    case 'SET_IMG_ZENKEI_SHASHIN':
      return {
        ...state,
        imgZenkeiShashinLeft:
          action.payload.imgZenkeiShashinLeft || state.imgZenkeiShashinLeft,
        imgZenkeiShashinRight:
          action.payload.imgZenkeiShashinRight || state.imgZenkeiShashinRight
      }
    case 'SET_IMG_SONSHOU_SHASHIN':
      return {
        ...state,
        imgListSonshouShashinLeft: action.payload.imgListSonshouShashinLeft
          ? Array.isArray(action.payload.imgListSonshouShashinLeft)
            ? action.payload.imgListSonshouShashinLeft
            : state.imgListSonshouShashinLeft
          : state.imgListSonshouShashinLeft,
        imgListSonshouShashinRight: action.payload.imgListSonshouShashinRight
          ? Array.isArray(action.payload.imgListSonshouShashinRight)
            ? action.payload.imgListSonshouShashinRight
            : state.imgListSonshouShashinRight
          : state.imgListSonshouShashinRight
      }

    //==================================================
    case 'SHOW_DATE_PICKER_POPUP':
      return {
        ...state,
        showDatePickerPopup: true
      }
    case 'HIDE_DATE_PICKER_POPUP':
      return {
        ...state,
        showDatePickerPopup: false
      }
    case 'SHOW_ZENKEI_SHASHIN_POPUP':
      return {
        ...state,
        showZenkeiShashinPopup: true
      }
    case 'HIDE_ZENKEI_SHASHIN_POPUP':
      return {
        ...state,
        showZenkeiShashinPopup: false
      }
    case 'SHOW_SENTAKU_POPUP':
      return {
        ...state,
        showSentakuPopup: true
      }
    case 'HIDE_SENTAKU_POPUP':
      return {
        ...state,
        showSentakuPopup: false
      }
    case 'SHOW_PHOTO_POPUP':
      return {
        ...state,
        showPhotoPopup: true,
        imagePopupSrc: action.payload
      }
    case 'HIDE_PHOTO_POPUP':
      return {
        ...state,
        showPhotoPopup: false,
        imagePopupSrc: null
      }
    case 'SET_SELECTED_DATE':
      return {
        ...state,
        selectedDate: action.payload
      }
    case 'SHOW_PHOTO_TYPE_SELECTION_POPUP':
      return {
        ...state,
        isAutoStoreImage: !!action.payload,
        showPhotoTypeSelectionPopup: true
      }
    case 'HIDE_PHOTO_TYPE_SELECTION_POPUP':
      return {
        ...state,
        showPhotoTypeSelectionPopup: false
      }
    case 'SHOW_SON_SHOU_SHANHIN_POPUP':
      return {
        ...state,
        showSonshouShanhinPopup: true,
        gazouIDSelected: action.payload
      }
    case 'HIDE_SON_SHOU_SHANHIN_POPUP':
      return {
        ...state,
        showSonshouShanhinPopup: false,
        gazouIDSelected: null
      }
    case 'SET_TMP_BASE_64_IMAGE':
      return {
        ...state,
        tmpBase64Image: action.payload
      }
    default:
      return state
  }
}

// main
const Shashinchou = () => {
  // state
  const [state, dispatch] = useReducer(reducer, {
    // GROUP_HEADER
    lblKyouryoumei: '',
    lblRosenmei: '',
    lblKanrishamei: '',
    lblHeader: '',
    selectedDate: undefined,

    // images ZenkeiShashin
    imgZenkeiShashinLeft: null,
    imgZenkeiShashinRight: null,
    // images SonshouShashin
    imgListSonshouShashinLeft: [],
    imgListSonshouShashinRight: [],

    //===============================================
    showDatePickerPopup: false,
    showZenkeiShashinPopup: false,
    showSentakuPopup: false,
    showPhotoPopup: false,
    showPhotoTypeSelectionPopup: false,
    showSonshouShanhinPopup: false,
    gazouIDSelected: null,
    imagePopupSrc: null,
    isAutoStoreImage: true,
    tmpBase64Image: null
  })

  // constants
  const photoZenkeiShashinRight = usePhotoGallery()
  const location = useLocation()
  const { NO_GYOUMU, BRIDGE_ID } = location.state

  const storeImageZenkeiShashinRight = base64image => {
    if (!base64image) {
      return
    }

    state.imgZenkeiShashinRight
      ? mutationUpdateZenkeiShashinRight.execute([
          base64image,
          NO_GYOUMU,
          BRIDGE_ID
        ])
      : mutationInsertZenkeiShashinRight.execute([
          NO_GYOUMU,
          BRIDGE_ID,
          base64image
        ])

    dispatch({ type: 'SET_TMP_BASE_64_IMAGE', payload: null })
  }
  const storeImageSonshouShanhinRight = base64image => {
    mutationInsertSonshouShashinRight.execute([
      NO_GYOUMU,
      BRIDGE_ID,
      base64image,
      getUUID()
    ])
  }

  // query - mutation
  const queryHeader = useQuery({
    queryString:
      SQLite.QueryString.select
        .NameShisetsuTenken_NameRosen_NameSoshiki_NameTenkensha_NengappiTenken
        .by.NoGyoumu_BridgeID,
    params: [NO_GYOUMU, BRIDGE_ID],
    onSuccess: data => {
      if (!data.length) {
        return
      }

      dispatch({
        type: 'SET_GROUP_HEADER',
        payload: {
          lblKyouryoumei: data[0].NAME_SHISETSU_TENKEN,
          lblRosenmei: data[0].NAME_ROSEN,
          lblKanrishamei: data[0].NAME_SOSHIKI,
          lblHeader: data[0].NAME_TENKENSHA,
          selectedDate: convertDate(data[0].NENGAPPI_TENKEN)
        }
      })
    }
  })
  const queryZenkeiShashinLeftFullPath = useQuery({
    queryString:
      SQLite.QueryString.TenkenhyoGazouTemp.select.GazouID_NameFile_FullPath.by
        .NoGyoumu_BridgeID.with.FlgTabletEqual0_GazouIDEqual0,
    params: [NO_GYOUMU, BRIDGE_ID],
    onSuccess: data => {
      if (!data.length) {
        return
      }

      const imgBase64 = data[0].FULL_PATH

      getImageFromBase64(imgBase64, img => {
        dispatch({
          type: 'SET_IMG_ZENKEI_SHASHIN',
          payload: {
            imgZenkeiShashinLeft: img.src
          }
        })
      })
    }
  })
  const queryZenkeiShashinRightFullPath = useQuery({
    queryString:
      SQLite.QueryString.TenkenhyoGazouTemp.select.GazouID_NameFile_FullPath.by
        .NoGyoumu_BridgeID.with.FlgTabletEqual1_GazouIDEqual0,
    params: [NO_GYOUMU, BRIDGE_ID],
    onSuccess: data => {
      if (!data.length) {
        return
      }

      const imgBase64 = data[0].FULL_PATH

      getImageFromBase64(imgBase64, img => {
        dispatch({
          type: 'SET_IMG_ZENKEI_SHASHIN',
          payload: {
            imgZenkeiShashinRight: img.src
          }
        })
      })
    }
  })
  const querySonshouShashinLeftListFullPath = useQuery({
    queryString:
      SQLite.QueryString.TenkenhyoGazouTemp.select.GazouID_NameFile_FullPath.by
        .NoGyoumu_BridgeID.with.FlgTabletEqual0_GazouIDNoEqual0,
    params: [NO_GYOUMU, BRIDGE_ID],
    onSuccess: data => {
      // if (!data.length) {
      //   return
      // }
      // const imgBase64 = data[0].FULL_PATH
      // getImageFromBase64(imgBase64, img => {
      //   dispatch({
      //     type: 'SET_IMG_SONSHOU_SHASHIN',
      //     payload: {
      //       imgListSonshouShashinLeft: img.src
      //     }
      //   })
      // })
    }
  })
  const querySonshouShashinRightListFullPath = useQuery({
    queryString:
      SQLite.QueryString.TenkenhyoGazouTemp.select.GazouID_NameFile_FullPath.by
        .NoGyoumu_BridgeID.with.FlgTabletEqual1_GazouIDNoEqual0,
    params: [NO_GYOUMU, BRIDGE_ID],
    onSuccess: data => {
      if (!Array.isArray(data)) {
        return
      }

      dispatch({
        type: 'SET_IMG_SONSHOU_SHASHIN',
        payload: {
          imgListSonshouShashinRight: data.map(item => ({
            GAZOU_ID: item.GAZOU_ID,
            FULL_PATH: item.FULL_PATH
          }))
        }
      })
    }
  })

  const mutationSelectTenkenRirekiTempByNoGyoumuAndBridgeID = useMutation({
    queryString:
      SQLite.QueryString.TenkenRirekiTemp.select.all.by.NoGyoumu_BridgeID.pure
  })
  const mutationInsertNengappiTenken = useMutation({
    queryString:
      SQLite.QueryString.TenkenRirekiTemp.insert
        .NoGyoumu_BridgeID_NengappiTenken.pure
  })
  const mutationUpdateNengappiTenken = useMutation({
    queryString:
      SQLite.QueryString.TenkenRirekiTemp.update.NengappiTenken.by
        .NoGyoumu_BridgeID.pure
  })
  const mutationUpdateZenkeiShashinLeft = useMutation({
    queryString:
      SQLite.QueryString.TenkenhyoGazouTemp.update.FullPath.by.NoGyoumu_BridgeID
        .with.FlgTabletEqual0_GazouIDEqual0
  })
  const mutationUpdateZenkeiShashinRight = useMutation({
    queryString:
      SQLite.QueryString.TenkenhyoGazouTemp.update.FullPath.by.NoGyoumu_BridgeID
        .with.FlgTabletEqual1_GazouIDEqual0,
    onSuccess: () => {
      queryZenkeiShashinRightFullPath.reExecute()
    }
  })
  const mutationInsertZenkeiShashinRight = useMutation({
    queryString:
      SQLite.QueryString.TenkenhyoGazouTemp.insert.NoGyoumu_BridgeID_FullPath
        .with.FlgTabletEqual1_GazouIDEqual0,
    onSuccess: () => {
      queryZenkeiShashinRightFullPath.reExecute()
    }
  })
  const mutationInsertSonshouShashinRight = useMutation({
    queryString:
      SQLite.QueryString.TenkenhyoGazouTemp.insert.NoGyoumu_BridgeID_FullPath
        .with.FlgTabletEqual1_GazouIDNoEqual0,
    onSuccess: () => {
      querySonshouShashinRightListFullPath.reExecute()
    }
  })

  // handles
  const handleShowDatePickerPopup = () => {
    dispatch({ type: 'SHOW_DATE_PICKER_POPUP' })
  }
  const handleHideDatePickerPopup = () => {
    dispatch({ type: 'HIDE_DATE_PICKER_POPUP' })
  }
  const handleShowZenkeiShashinPopup = () => {
    dispatch({ type: 'SHOW_ZENKEI_SHASHIN_POPUP' })
  }
  const handleHideZenkeiShashinPopup = () => {
    dispatch({ type: 'HIDE_ZENKEI_SHASHIN_POPUP' })
  }
  const handleSetSelectedDate = date => {
    dispatch({ type: 'SET_SELECTED_DATE', payload: date })
  }
  const handleResetSelectedDate = e => {
    e.stopPropagation()

    dispatch({ type: 'SET_SELECTED_DATE', payload: getDateNowString() })
  }
  const handleShowPhotoPopup = imagePopupSrc => {
    dispatch({ type: 'SHOW_PHOTO_POPUP', payload: imagePopupSrc })
  }
  const handleHidePhotoPopup = () => {
    dispatch({ type: 'HIDE_PHOTO_POPUP' })
  }
  const handleShowPhotoTypeSelectionPopup = ({ isAutoStoreImage }) => {
    dispatch({
      type: 'SHOW_PHOTO_TYPE_SELECTION_POPUP',
      payload: isAutoStoreImage
    })
  }
  const handleHidePhotoTypeSelectionPopup = () => {
    dispatch({ type: 'HIDE_PHOTO_TYPE_SELECTION_POPUP' })
  }
  const handleShowSonshouShanhinPopup = GazouID => {
    dispatch({ type: 'SHOW_SON_SHOU_SHANHIN_POPUP', payload: GazouID })
  }
  const handleHideSonshouShanhinPopup = () => {
    dispatch({ type: 'HIDE_SON_SHOU_SHANHIN_POPUP' })
  }
  const handleOnSuccessPhotoZenkeiShashinRight = photo => {
    mutationSelectTenkenRirekiTempByNoGyoumuAndBridgeID
      .execute([NO_GYOUMU, BRIDGE_ID])
      .then(data => {
        if (data.length) {
          mutationUpdateNengappiTenken.execute([
            state.selectedDate.replace(/-/gi, ''),
            NO_GYOUMU,
            BRIDGE_ID
          ])

          return
        }

        mutationInsertNengappiTenken.execute([
          NO_GYOUMU,
          BRIDGE_ID,
          state.selectedDate.replace(/-/gi, '')
        ])
      })

    //=====================================
    const { imageUrl } = photo
    getBase64FromImage(imageUrl, base64image => {
      if (!state.isAutoStoreImage) {
        dispatch({ type: 'SET_TMP_BASE_64_IMAGE', payload: base64image })

        return
      }

      storeImageZenkeiShashinRight(base64image)
    })
  }
  const handleOnSuccessPhotoSonshouShashinRight = photo => {
    mutationSelectTenkenRirekiTempByNoGyoumuAndBridgeID
      .execute([NO_GYOUMU, BRIDGE_ID])
      .then(data => {
        if (data.length) {
          mutationUpdateNengappiTenken.execute([
            state.selectedDate.replace(/-/gi, ''),
            NO_GYOUMU,
            BRIDGE_ID
          ])

          return
        }

        mutationInsertNengappiTenken.execute([
          NO_GYOUMU,
          BRIDGE_ID,
          state.selectedDate.replace(/-/gi, '')
        ])
      })

    //=====================================
    const { imageUrl } = photo
    getBase64FromImage(imageUrl, base64image => {
      storeImageSonshouShanhinRight(base64image)
    })
  }

  // effects

  // render
  return (
    <>
      <PopupDatePicker
        hidden={!state.showDatePickerPopup}
        initialDate={state.selectedDate}
        onClickBackground={handleHideDatePickerPopup}
        onChangeDate={handleSetSelectedDate}
      />

      <PopupPhoto
        hidden={!state.showPhotoPopup}
        image={state.imagePopupSrc}
        onClickBackground={handleHidePhotoPopup}
      />

      <PopupZenkeiShashin
        hidden={!state.showZenkeiShashinPopup}
        noGyoumu={NO_GYOUMU}
        bridgeID={BRIDGE_ID}
        onClickTojika={() => {
          handleShowPhotoTypeSelectionPopup({ isAutoStoreImage: false })
        }}
        onClickTouroku={() =>
          storeImageZenkeiShashinRight(state.tmpBase64Image)
        }
        onClickClose={() => {
          handleHideZenkeiShashinPopup()
          dispatch({ type: 'SET_TXTA_SHOKENTOU_Z_S', payload: null })
        }}
      />

      <PopupSonshouShashin
        hidden={!state.showSonshouShanhinPopup}
        noGyoumu={NO_GYOUMU}
        bridgeID={BRIDGE_ID}
        gazouID={state.gazouIDSelected}
        onClickClose={handleHideSonshouShanhinPopup}
        onChangeGlobalValue={() =>
          querySonshouShashinRightListFullPath.reExecute()
        }
      />

      <PopupTakePhoto
        hidden={!state.showPhotoTypeSelectionPopup}
        onClickBackground={handleHidePhotoTypeSelectionPopup}
        onChangePhoto={handleOnSuccessPhotoZenkeiShashinRight}
      />

      {/*========================================================================= */}
      {/*========================================================================= */}
      {/*========================================================================= */}

      <Styled.Container>
        <HeaderBarType1 title={String.shashinchou} />

        <MainContent>
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
                    <Text>{String.kyouryoumei}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblRosenmei}</Text>
                  </Styled.Column>
                  <Styled.ColumnTitle>
                    <Text>{String.tenkenin}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblHeader}</Text>
                  </Styled.Column>
                </Styled.Row>

                <Styled.Row>
                  <Styled.ColumnTitle>
                    <Text>{String.kanrishamei}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Text>{state.lblKanrishamei}</Text>
                  </Styled.Column>
                  <Styled.ColumnTitle>
                    <Text>{String.tenken_nengappi}</Text>
                  </Styled.ColumnTitle>
                  <Styled.Column>
                    <Styled.DateContainer onClick={handleShowDatePickerPopup}>
                      <Text>{state.selectedDate}</Text>

                      <ButtonType1
                        light={true}
                        size='small'
                        title={String.today}
                        onClick={handleResetSelectedDate}
                      />
                    </Styled.DateContainer>
                  </Styled.Column>
                </Styled.Row>
              </Styled.TBody>
            </Styled.Table>

            <Styled.ContentCol>
              <Styled.ContentRow style={{ justifyContent: 'space-between' }}>
                <Styled.ContentRow>
                  <ButtonType4
                    title={String.fairu_sentaku}
                    onClick={() =>
                      photoZenkeiShashinRight.getGallery({
                        onSuccess: handleOnSuccessPhotoSonshouShashinRight
                      })
                    }
                  />
                  <ButtonType4
                    title={String.kamera_kidou}
                    onClick={() =>
                      photoZenkeiShashinRight.takePhoto({
                        onSuccess: handleOnSuccessPhotoSonshouShashinRight
                      })
                    }
                  />
                </Styled.ContentRow>
                <Styled.ContentRow>
                  <ButtonType1 title={String.youshiki_sakusei} />
                  <ButtonType1
                    title={
                      String.youshiki_sakusei + '(' + String.mizohashi + ')'
                    }
                  />
                </Styled.ContentRow>
              </Styled.ContentRow>

              <Styled.ContentCol
                style={{
                  height: `calc(100vh - (var(--header-bar) 
                      + var(--padding-1) 
                      + 2*(var(--padding-1) + var(--font-size)) 
                      + var(--padding-2) 
                      + 2*var(--button-padding-vertical) 
                      + var(--font-size)
                      + 2*var(--padding-1)
                    ))`,
                  overflowY: 'scroll'
                }}
              >
                <Title style={{ marginLeft: TITLE_MARGIN_LEFT }}>
                  {String.zenkei_shashin}
                </Title>
                <Styled.ContentRow
                  style={{
                    alignSelf: 'center',
                    alignItems: 'center',
                    width: IMAGE_WIDTH_CONTAINER,
                    gap: `calc(${IMAGE_SPACE_BETWEEN} / 2.5)`
                  }}
                >
                  <InputCheckBox style={{ opacity: 0 }} />

                  <Styled.ContentRow
                    style={{
                      gap: IMAGE_SPACE_BETWEEN,
                      justifyContent: 'center',
                      width: '100%',
                      overflow: 'hidden'
                    }}
                  >
                    <Styled.Image
                      style={{ flex: 1 }}
                      src={state.imgZenkeiShashinLeft || Images.no_image}
                      onClick={() => {
                        state.imgZenkeiShashinLeft &&
                          handleShowPhotoPopup(Images.no_image)
                      }}
                    />
                    {state.imgZenkeiShashinRight ? (
                      <Styled.Image
                        style={{ flex: 1 }}
                        src={state.imgZenkeiShashinRight}
                        onClick={handleShowZenkeiShashinPopup}
                      />
                    ) : (
                      <ImageInstance
                        style={{ flex: 1 }}
                        onClick={() =>
                          handleShowPhotoTypeSelectionPopup({
                            isAutoStoreImage: true
                          })
                        }
                      >
                        <Text>{String.please_take_a_picture}</Text>
                      </ImageInstance>
                    )}
                  </Styled.ContentRow>
                </Styled.ContentRow>

                <Styled.Spacing2 />

                <Title style={{ marginLeft: TITLE_MARGIN_LEFT }}>
                  {String.sonshou_shashin}
                </Title>
                <Styled.ContentCol>
                  {state.imgListSonshouShashinRight.map((item, _) => (
                    <Styled.ContentRow
                      key={_.toString()}
                      style={{
                        alignSelf: 'center',
                        alignItems: 'center',
                        width: IMAGE_WIDTH_CONTAINER,
                        gap: `calc(${IMAGE_SPACE_BETWEEN} / 2.5)`
                      }}
                    >
                      <InputCheckBox style={{ justifySelf: 'center' }} />

                      <Styled.ContentRow
                        style={{
                          gap: IMAGE_SPACE_BETWEEN,
                          justifyContent: 'center',
                          width: '100%',
                          overflow: 'hidden'
                        }}
                      >
                        <Styled.Image
                          src={Images.no_image}
                          style={{ flex: 1 }}
                        />
                        <Styled.Image
                          src={
                            item.FULL_PATH
                              ? String.base64RootImage + item.FULL_PATH
                              : Images.no_image
                          }
                          style={{ flex: 1 }}
                          onClick={() =>
                            handleShowSonshouShanhinPopup(item.GAZOU_ID)
                          }
                        />
                      </Styled.ContentRow>
                    </Styled.ContentRow>
                  ))}
                </Styled.ContentCol>

                <Styled.Spacing3 />
              </Styled.ContentCol>
            </Styled.ContentCol>
          </Styled.ContentCol>
        </MainContent>
      </Styled.Container>
    </>
  )
}

export default Shashinchou
