import React, { useReducer, useEffect, useRef } from 'react'
import { String, Images, DummyData, SQLite, NamePages } from '../../constants'
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
  getUUID,
  groupArrayOfObjects,
  convertObjectToArrayKeyValue
} from './../../utils/commons'
import { reducer } from './reducer'

// constants
const IMAGE_SPACE_BETWEEN = '8vw'
const TITLE_MARGIN_LEFT = '8vw'
const IMAGE_WIDTH_CONTAINER = `calc(100% - 3*${TITLE_MARGIN_LEFT})`

// main
const Shashinchou = ({ NO_GYOUMU, BRIDGE_ID }) => {
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
  const history = useHistory()
  let refListCheckBox = useRef({})

  const storeImageZenkeiShashinRight = base64image => {
    if (!base64image) {
      return
    }

    mutationUpdateZenkeiShashinRight.execute([
      base64image,
      NO_GYOUMU,
      BRIDGE_ID
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
  const gazouFormatter = gazou => {
    return gazou.map((item, index) => ({
      ...item,
      FLG_DAMAGE: refListCheckBox.current[item.GAZOU_ID]
        ? refListCheckBox.current[item.GAZOU_ID].checked
          ? 1
          : 0
        : item.FLG_DAMAGE,
      CODE_DAMAGE_SHURUI: item.CODE_DAMAGE_SHURUI || 0,
      NO_BUZAI: item.NO_BUZAI || 0,
      SHINDAN_TENKEN: item.SHINDAN_TENKEN || 0,
      NO_SHASHIN: index
    }))
  }
  const gazouFilteredByFlgCalvert = (gazou, flgCalvert) => {
    const gazouFilteredByFlgTabletAndFlgDamage = gazou.filter(
      item => item.FLG_TABLET === 1 && item.FLG_DAMAGE === 0
    )
    const gazouGrouped = groupArrayOfObjects(
      gazouFilteredByFlgTabletAndFlgDamage,
      'NO_BUZAI'
    )
    const gazouFilteredByFlgCalvert =
      flgCalvert === 0
        ? {
            '1': [...(gazouGrouped['1'] || [])],
            '2': [...(gazouGrouped['2'] || [])],
            '3': [...(gazouGrouped['3'] || [])],
            '4': [...(gazouGrouped['4'] || [])],
            '5': [...(gazouGrouped['5'] || [])],
            '99': [...(gazouGrouped['99'] || [])]
          }
        : {
            '11': [...(gazouGrouped['11'] || [])],
            '12': [...(gazouGrouped['12'] || [])],
            '13': [...(gazouGrouped['13'] || [])],
            '14': [...(gazouGrouped['14'] || [])],
            '15': [...(gazouGrouped['15'] || [])]
          }
    return gazouFilteredByFlgCalvert
  }
  const buzaiHyoukaFromGazou = gazou => {
    return gazou.map(item => ({
      NO_BUZAI: Number(item[0]),
      SHINDAN_TENKEN: item[1].reduce(
        (prev, curr) =>
          prev === null
            ? curr.SHINDAN_TENKEN > 1
              ? curr.SHINDAN_TENKEN
              : prev
            : curr.SHINDAN_TENKEN > prev
            ? curr.SHINDAN_TENKEN
            : prev,
        null
      ),
      CODE_HENJOU_TENKEN: item[1]
        .filter(
          item => item.DAMAGE_SHURUI?.length || item.NAME_DAMAGE_SHURUI?.length
        )
        .map(item =>
          item.DAMAGE_SHURUI?.length
            ? String.sonohoka + ' (' + item.DAMAGE_SHURUI + ')'
            : item.NAME_DAMAGE_SHURUI
        )
        .toString()
        .replaceAll(',', String.comma),
      BIKOU_TENKEN: item[1]
        .map(item => String.shashin + item.NO_SHASHIN)
        .toString()
        .replaceAll(',', String.comma)
    }))
  }
  const tranformDataFromTempToOfficial = flgCalvert => {
    Promise.all([
      mutationUpdateFlgCalvertBridge.execute([
        flgCalvert,
        NO_GYOUMU,
        BRIDGE_ID
      ]),
      mutationSelectTenkenhyoGazouTempByNoGyoumuAndBridgeID.execute([
        NO_GYOUMU,
        BRIDGE_ID
      ]),
      mutationSelectTenkenRirekiTempByNoGyoumuAndBridgeID.execute([
        NO_GYOUMU,
        BRIDGE_ID
      ]),
      mutationDeleteTenkenhyoGazouByNoGyoumuAndBridgeID.execute([
        NO_GYOUMU,
        BRIDGE_ID
      ]),
      mutationDeleteTenkenRirekiByNoGyoumuAndBridgeIDAndFlgTabletEqual1.execute(
        [NO_GYOUMU, BRIDGE_ID]
      ),
      mutationDeleteBuzaiHyouka.execute([NO_GYOUMU, BRIDGE_ID])
    ]).then(data => {
      const gazouRoot = gazouFormatter(data[1])

      const gazouFiltered = gazouFilteredByFlgCalvert(gazouRoot, flgCalvert)
      const gazouReduce = convertObjectToArrayKeyValue(gazouFiltered).filter(
        item => item[1].length
      )

      const buzaiHyouka = buzaiHyoukaFromGazou(gazouReduce)
      const maxShindanBuzaiHyouka = Math.max(
        ...buzaiHyouka.map(item => item.SHINDAN_TENKEN)
      )
      const tTenkenRirekiTemp = {
        ...data[2]?.[0],
        FLG_TABLET: 1,
        SHINDAN_TENKEN: maxShindanBuzaiHyouka
      }

      Promise.all([
        gazouRoot.map(gazou =>
          mutationInsertTenkenhyoGazouFullColumn.execute([
            NO_GYOUMU,
            BRIDGE_ID,
            gazou.FLG_TABLET,
            gazou.GAZOU_ID,
            gazou.NO_SHASHIN,
            gazou.NAME_BUZAI,
            gazou.NO_BUZAI,
            gazou.DAMAGE_SHURUI,
            gazou.KEIKAN,
            gazou.SHINDAN_TENKEN,
            gazou.BIKOU,
            gazou.HOUSHIN_CHOUSA,
            gazou.HOUSHIN_SOCHI,
            gazou.NAME_FILE,
            gazou.CODE_DAMAGE_SHURUI,
            gazou.FLG_DAMAGE,
            gazou.FULL_PATH
          ])
        ),
        mutationInsertTenkenRirekiFullColumn.execute([
          NO_GYOUMU,
          BRIDGE_ID,
          tTenkenRirekiTemp.NENGAPPI_TENKEN,
          tTenkenRirekiTemp.NAME_TENKENSHA,
          tTenkenRirekiTemp.SHINDAN_TENKEN,
          tTenkenRirekiTemp.SHOKEN,
          tTenkenRirekiTemp.NAME_SHISETSU_TENKEN,
          tTenkenRirekiTemp.NAME_SHISETSU_KANA_TENKEN,
          tTenkenRirekiTemp.IDO_START_TENKEN,
          tTenkenRirekiTemp.KEIDO_START_TENKEN,
          tTenkenRirekiTemp.NENGAPPI_KOUSHIN,
          tTenkenRirekiTemp.FLG_TABLET,
          tTenkenRirekiTemp.BIKOU
        ]),
        buzaiHyouka.map(item =>
          mutationInsertBuzaiHyouka.execute([
            NO_GYOUMU,
            BRIDGE_ID,
            1,
            item.NO_BUZAI,
            item.SHINDAN_TENKEN,
            item.CODE_HENJOU_TENKEN,
            item.BIKOU_TENKEN
          ])
        )
      ]).then(() => {
        history.replace(
          flgCalvert === 0
            ? NamePages.MenuRouterTypeFlagCalvert1
            : NamePages.MenuRouterTypeFlagCalvert2,
          {
            NO_GYOUMU,
            BRIDGE_ID
          }
        )
      })
    })
  }

  // query - mutation
  const queryHeader = useQuery({
    queryString:
      SQLite.QueryString.select
        .NameShisetsuTenken_NameRosen_NameSoshiki_NameTenkensha_NengappiTenken
        .by.NoGyoumu_BridgeID.pure,
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
  const mutationSelectTenkenRirekiAll = useMutation({
    queryString: SQLite.QueryString.TenkenRireki.select.all.pure
  })
  const mutationDeleteTenkenRirekiByNoGyoumuAndBridgeIDAndFlgTabletEqual1 = useMutation(
    {
      queryString:
        SQLite.QueryString.TenkenRireki.delete.by.NoGyoumu_BridgeID.with
          .FlgTabletEqual1
    }
  )
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
  const mutationUpdateFlgCalvertBridge = useMutation({
    queryString:
      SQLite.QueryString.Bridge.update.FlgCalvert.by.NoGyoumu_BridgeID.pure
  })
  const mutationSelectTenkenhyoGazouTempByNoGyoumuAndBridgeID = useMutation({
    queryString:
      SQLite.QueryString.select.TableTenkenhyoGazouTemp_NameDamageShurui.by
        .NoGyoumu_BridgeID.pure
  })
  const mutationInsertTenkenhyoGazouFullColumn = useMutation({
    queryString: SQLite.QueryString.TenkenhyoGazou.insert.fullColumn
  })
  const mutationDeleteTenkenhyoGazouByNoGyoumuAndBridgeID = useMutation({
    queryString:
      SQLite.QueryString.TenkenhyoGazou.delete.by.NoGyoumu_BridgeID.pure
  })
  const mutationInsertTenkenRirekiFullColumn = useMutation({
    queryString: SQLite.QueryString.TenkenRireki.insert.fullColumn
  })
  const mutationDeleteBuzaiHyouka = useMutation({
    queryString:
      SQLite.QueryString.BuzaiHyouka.delete.by.NoGyoumu_BridgeID.with
        .FlgTabletEqual1
  })
  const mutationInsertBuzaiHyouka = useMutation({
    queryString:
      SQLite.QueryString.BuzaiHyouka.insert
        .NoGyoumu_BridgeID_FlgTablet_NoBuzai_ShindanTenken_CodeHenjouTenken_BikouTenken
        .pure
  })
  const mutationSelectBuzaiHyouka = useMutation({
    queryString: SQLite.QueryString.BuzaiHyouka.select.all.pure
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
    const { imageUrl } = photo
    getBase64FromImage(imageUrl, base64image => {
      storeImageSonshouShanhinRight(base64image)
    })
  }
  const handleYoushikiSakusei = () => {
    mutationUpdateNengappiTenken
      .execute([state.selectedDate.replace(/-/gi, ''), NO_GYOUMU, BRIDGE_ID])
      .then(() => tranformDataFromTempToOfficial(0))
  }
  const handleYoushikiSakuseiMizohashi = () => {
    mutationUpdateNengappiTenken
      .execute([state.selectedDate.replace(/-/gi, ''), NO_GYOUMU, BRIDGE_ID])
      .then(() => tranformDataFromTempToOfficial(1))
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
                  <ButtonType1
                    title={String.youshiki_sakusei}
                    onClick={handleYoushikiSakusei}
                  />
                  <ButtonType1
                    title={
                      String.youshiki_sakusei + '(' + String.mizohashi + ')'
                    }
                    onClick={handleYoushikiSakuseiMizohashi}
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
                      <InputCheckBox
                        style={{ justifySelf: 'center' }}
                        ref={element =>
                          (refListCheckBox.current[item.GAZOU_ID] = element)
                        }
                      />

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
